const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { restoreUser } = require('../../utils/auth');
const db = require('../../db/models');
const { Op } = require('sequelize');

const router = express.Router();

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
            // [db.sequelize.fn('COUNT', 'Bookings.id'), 'Count'],
            // [db.sequelize.literal('current_time'), 'current time']
        ],
        include: [{
                model: db.Booking,
                attributes:[],
                where: {
                    statusId: 1,
                    date: {
                        [Op.gte]: db.Sequelize.literal('current_date')
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
                'User.id',
                'User.username'],
        having: db.Sequelize.where(db.sequelize.fn('COUNT', 'Bookings.id'), {
                [Op.gt]: 0,
            }),
        });
    exp = await exp.map(obj => obj.toJSON());
    console.log(exp);
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
    console.log(exp);
    return res.json(exp);
}));

//Get list of created experiences
router.get("/hosted", restoreUser, asyncHandler(async (req,res) => {
    const user = await req.user.toJSON();
    let exp = await db.Experience.findAll({
        include: [{
                model: db.Booking
            }
        ],
        where: {
            hostId: user.id
        }
        });
    exp = await exp.map(obj => obj.toJSON());
    console.log(exp);
    return res.json(exp);
}));

router.get("/:id(\\d+)", asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const exp = await db.Experience.findByPk(id,{
        include: [
            {
                model: db.User
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
}))
module.exports = router;
