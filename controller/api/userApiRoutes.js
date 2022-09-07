// create router object
const router = require('express').Router();

router.post('/login', (req, res) => {
    res.json({ message: 'test' });
})

/*
43:57 in lecture video
to log someone in, use
req.session.save(()=> {
    req.session.loggedIn = true;

    res
        .status(200)
        .json({user: dbUserData, //message here})
})
*/


module.exports = router;