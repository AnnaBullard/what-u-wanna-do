const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { restoreUser } = require('../../utils/auth');
const db = require('../../db/models');
const { Op } = require('sequelize');

const router = express.Router();

router.patch("/:id(\\d+)/book", restoreUser, asyncHandler(async (req, res) => {
    const user = await req.user.toJSON();
    const id = parseInt(req.params.id);
    const {
        price,
        statusId,
    } = req.body;

    let booking = await db.Booking.findByPk(id);

    exp = await booking.update({ 
        price,
        statusId,
        userId: user.id
    }) 

    return res.json(exp);
}));

router.get("/:id(\\d+)/unbook", restoreUser, asyncHandler(async (req, res) => {
    const user = await req.user.toJSON();
    const id = parseInt(req.params.id);
    const {
        price,
        statusId,
    } = req.body;

    let booking = await db.Booking.findByPk(id,{
        where: {
            userId: user.id
        }
    });

    exp = await booking.update({ 
        price: null,
        statusId: 1,
        userId: null
    }) 

    return res.json(exp);
}));

router.get("/booked", restoreUser, asyncHandler(async (req, res) => {
    const user = await req.user.toJSON();

    let bookings = await db.Booking.findAll({
        where: {
            userId: user.id
        },
        include: {
            model: db.Experience,
            include: db.User
        },
        order: [["date", "ASC"]]
    })

    return res.json(bookings);
}))

module.exports = router;