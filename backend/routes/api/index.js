
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);


/* TESTIN ROUTES */
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.post('/test', function(req, res) {
    console.log('TESTING!!!!!!!!!!!!!!!!!!!!!!!!!')
    res.json({ requestBody: req.body });
});

router.get('/set-token-cookie', asyncHandler(async (req, res) => {
    const user = await User.findOne({
        where: {
          username: 'Demo User'
        },
      })
    setTokenCookie(res, user);
    return res.json({ user });
}));

router.get('/restore-user', restoreUser, (req, res) => {
      return res.json(req.user);
    }
);

router.get('/require-auth', requireAuth, (req, res) => {
      return res.json(req.user);
    }
);


module.exports = router;
