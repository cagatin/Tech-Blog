// create router object
const router = require('express').Router();

router.post('/login', (req, res) => {
    res.json({ message: 'test' });
})


module.exports = router;