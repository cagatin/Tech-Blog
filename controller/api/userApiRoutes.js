// create router object
const router = require('express').Router();
const User = require('../../model/User');

router.post('/login', async (req, res) => {
    try {
        // Find a user in our database that matches the email
        const userData = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        // if a user was NOT found, return an error
        if (!userData) {
            res
                .status(404)
                .json({ message: "Incorrect Email!" });
            return;
        }

        // Check if the password supplied in the body matches the user's password
        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(404)
                .json({ message: "Incorrect Password" });
            return;
        }

        // Set loggedIn to true on the session
        req.session.save(() => {
            req.session.user_id = userData.id;
            res.session.username = userData.username;
            res.session.loggedIn = true;

            res
                .status(200)
                .json({ user: userData, message: "Log In Successful!" });
            return;
        });
    } catch (err) {
        res.status(404).json(err);
    }
});

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