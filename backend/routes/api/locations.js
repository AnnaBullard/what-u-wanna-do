const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { restoreUser } = require('../../utils/auth');
const db = require('../../db/models');
const { Op } = require('sequelize');

const router = express.Router();

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

router.get("/states", asyncHandler(async (req, res) => {
    let states = await db.State.findAll();

    return res.json(states);
}))

module.exports = router;