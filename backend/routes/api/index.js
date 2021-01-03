const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const experiencesRouter = require('./experiences.js');
const bookingsRouter = require('./bookings');
const locationRouter = require('./locations');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/experiences', experiencesRouter);

router.use('/bookings', bookingsRouter);

router.use('/locations', locationRouter);

module.exports = router;
