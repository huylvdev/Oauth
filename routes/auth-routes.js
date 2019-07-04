const router = require('express').Router();
const passport = require('passport')
// const router = express.Router();
//auth login

router.get('/login', function (req, res, next) {
    res.render('login', { title: 'login' });
});


router.get('/logout', function (req, res, next) {
    res.render('logout', { title: 'logout' });
});


router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));
// const router = express.Router();
module.exports = router;