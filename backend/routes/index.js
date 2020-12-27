const express = require('express');
const apiRouter = require('./api');

const router = express.Router();

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

router.use('/api', apiRouter);

module.exports = router;
