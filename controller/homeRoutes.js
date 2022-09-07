// create router object
const router = require('express').Router();
const checkAuth = require('../utils/checkAuth');

router.get('/', (req, res) => {
    res.render('homepage');
})
router.get('/login', (req, res) => {
    res.render('login');
})
router.get('/signup', (req, res) => {
    res.render('signup');
})
router.get('/logout', checkAuth, (req, res) => {
    res.render('logout');
})
router.get('/dashboard', checkAuth, (req, res) => {
    res.render('dashboard');
})

module.exports = router;