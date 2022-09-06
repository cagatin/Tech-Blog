// create router object
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
})
router.get('/signin', (req, res) => {
    res.render('signin');
})
router.get('/signup', (req, res) => {
    res.render('signup');
})
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

module.exports = router;