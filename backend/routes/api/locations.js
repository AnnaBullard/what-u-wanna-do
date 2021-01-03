const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { restoreUser } = require('../../utils/auth');
const db = require('../../db/models');
const { Op } = require('sequelize');

const router = express.Router();

const validateLocation = [
    check("address1")
        .trim()
        .escape()
        .exists({ checkFalsy: true })
        .withMessage('Please provide address')
        .isLength({min: 3})
        .withMessage(`Address should be at least 3 characters`),
    check("address2")
        .trim()
        .escape(),
    check("city")
        .trim()
        .escape()
        .exists({ checkFalsy: true })
        .withMessage('Please provide city'),
    check("stateId")
        .exists({ checkFalsy: true })
        .withMessage('Please provide state')
        .custom(value => {
            if (value < 1 || value > 50) {
                throw new Error('Pick propper state');
            }
            return true;
        }),
    check("zip")
        .trim()
        .escape()
        .exists({ checkFalsy: true })
        .withMessage('Please provide zip code'),
    handleValidationErrors,
]

router.get("/", restoreUser, asyncHandler(async (req, res) => {
    const user = await req.user.toJSON();

    let locations = await db.Location.findAll({
        where: {
            userId: user.id
        },
        include: {
            model: db.State
        }
    })

    return res.json(locations);
}))

router.patch("/:id(\\d+)", restoreUser, validateLocation, asyncHandler(async (req, res) => {
    const user = await req.user.toJSON();
    const id = parseInt(req.params.id);
    const {
        address1,
        address2,
        city,
        stateId,
        zip
    } = req.body;

    let location = await db.Location.findByPk(id,{
        where: {
            userId: user.id
        }
    });

    await location.update({
        address1,
        address2,
        city,
        stateId,
        zip
    })

    const updatedLocation = await db.Location.findByPk(id, {
        include: db.State,
        where: {
            userId: user.id
        }
    })

    return res.json(updatedLocation);
}))

router.get("/states", asyncHandler(async (req, res) => {
    let states = await db.State.findAll();

    return res.json(states);
}))

module.exports = router;