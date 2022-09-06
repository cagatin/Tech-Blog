// create router object
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
})
router.get('/login', (req, res) => {
    res.render('login');
})
router.get('/signup', (req, res) => {
    res.render('signup');
})
router.get('/logout', (req, res) => {
    if (req.session.loggedIn) {
        res.render('logout');
    } else {
        res.redirect('/login')
    }
})
router.get('/dashboard', (req, res) => {
    if (req.session.loggedIn) {
        res.render('dashboard');
    } else {
        res.redirect('/login')
    }
})

module.exports = router;