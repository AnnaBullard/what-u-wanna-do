const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { restoreUser } = require('../../utils/auth');
const db = require('../../db/models');
const { Op } = require('sequelize');

const router = express.Router();

const validateExperience = [
    check("title")
        .trim()
        .escape()
        .exists({checkFalsy: true})
        .withMessage('Please provide title')
        .isLength({min:3, max:150})
        .withMessage('Title length should be between 3 and 150 characters'),
    check("max")
        .exists({checkFalsy: true})
        .withMessage('Please provide max')
        .isInt({min: 1})
        .withMessage('Please provide valid max amount of people to attend this event'),
    check("duration")
        .exists({checkFalsy: true})
        .withMessage('Please provide duration')
        .isInt({min: 1})
        .withMessage('Please provide valid amount of minutes for duration '),
    check("currentPrice")
        .exists({checkFalsy: true})
        .withMessage('Please provide a link for the image')
        .isCurrency({require_symbol: false,negative_sign_before_digits: false})
        .withMessage('Please provide valid max amount of people to attend this event'),
    check("locationId")
        .custom(value => {
            if (parseInt(value) <= 0) {
                throw new Error('Please pick a location from a list');
            }
            return true;
        }),
    check("imageUrl")
        .exists({checkFalsy: true})
        .withMessage('Please provide a link for the image')
        .custom(value => {
            const ext = value.slice(value.length-3).toLowerCase();
            if(!["png", "jpg"].includes(ext)){
                throw new Error('Image should have png or jpeg extention');
            } 
            return true
        }),
    handleValidationErrors
]

//Get list of Available Experiences
router.get("/", asyncHandler(async (req,res) => {
    let exp = await db.Experience.findAll({
        attributes: [
            'id',
            'title',
            'description',
            'max',
            'duration',
            'currentPrice',
            'locationId',
            'hostId',
            'imageUrl'
        ],
        include: [{
                model: db.Booking,
                attributes:[],
                where: {
                    statusId: 1,
                    date: {
                        [Op.gt]: db.Sequelize.literal('current_date')
                    }
            },
            },{
                model: db.User,
                attributes: ['username']
            }
        ],
        group: ['Experience.id',
                'Experience.title',
                'Experience.description',
                'Experience.max',
                'Experience.duration',
                'Experience.currentPrice',
                'Experience.locationId',
                'Experience.hostId',
                'Experience.imageUrl',
                'User.id',
                'User.username'],
        having: db.Sequelize.where(db.sequelize.fn('COUNT', 'Bookings.id'), {
                [Op.gt]: 0,
            }),
        });
    exp = await exp.map(obj => obj.toJSON());
    return res.json(exp);
}))

//Get list of booked experiences
router.get("/booked", restoreUser, asyncHandler(async (req,res) => {
    const user = await req.user.toJSON();
    let exp = await db.Experience.findAll({
        include: [{
                model: db.Booking,
                where: {
                    userId: user.id
                }
            }
        ]
        });
    exp = await exp.map(obj => obj.toJSON());
    return res.json(exp);
}));

//Get list of created experiences
router.get("/hosted", restoreUser, asyncHandler(async (req,res) => {
    const user = await req.user.toJSON();
    let exp = await db.Experience.findAll({
        include: [{
                model: db.Booking,
                where: {
                    statusId: [1, 2, 3],
                    date: {
                        [Op.gt]: db.Sequelize.literal('current_date')
                    }
                },
                required:false
            }
        ],
        where: {
            hostId: user.id
        }
        });
    exp = await exp.map(obj => obj.toJSON());
    return res.json(exp);
}));

router.get("/:id(\\d+)", asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const exp = await db.Experience.findByPk(id,{
        include: [
            {
                model: db.User
            },
            {
                model: db.Location,
                include: db.State
            }
        ]
    })
    return res.json(exp);
}))

router.get("/:id(\\d+)/bookings", asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const exp = await db.Booking.findAll({
        where:{
            experienceId: id
        }
    })
    return res.json(exp);
}));

router.get("/:id(\\d+)/bookings/available", asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const exp = await db.Booking.findAll({
        where:{
            experienceId: id,
            date: {
                [Op.gt]: db.Sequelize.literal('current_date')
            },
            statusId: 1
        }
    })
    return res.json(exp);
}));

router.post("/", restoreUser, validateExperience, asyncHandler( async (req, res) =>{
    console.log("ADDDD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1", req.body)
    const user = await req.user.toJSON();
    const {title,
        description,
        max,
        duration,
        currentPrice,
        locationId,
        imageUrl,
        hostId} = req.body;


    const experience = await db.Experience.create(
        {title,
        description,
        max,
        duration,
        currentPrice,
        locationId,
        imageUrl,
        hostId}
        )
    
    const updatedExperience = await db.Experience.findByPk(experience.id,{
        include: [{
            model: db.Booking,
            where: {
                statusId: [1, 2, 3],
                date: {
                    [Op.gt]: db.Sequelize.literal('current_date')
                }
            },
            required:false
        }]
    })
    return res.json(updatedExperience);
}))

router.patch("/", restoreUser, validateExperience, asyncHandler( async (req, res) =>{
    const user = await req.user.toJSON();
    const {title,
        description,
        max,
        duration,
        currentPrice,
        locationId,
        imageUrl,
        id} = req.body;


    const experience = await db.Experience.findByPk(id,{
        where: {
            hostId: user.id
        }
    })
    
    experience.update(
        {title,
        description,
        max,
        duration,
        currentPrice,
        locationId,
        imageUrl})

    const updatedExperience = await db.Experience.findByPk(experience.id,{
        include: [{
            model: db.Booking,
            where: {
                statusId: [1, 2, 3],
                date: {
                    [Op.gt]: db.Sequelize.literal('current_date')
                }
            },
            required:false
        }]
    })

    return res.json(updatedExperience);

}))

module.exports = router;
