// create router object
const router = require('express').Router();
const { User, Post, Comment } = require('../../model/index.js');

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
            req.session.loggedIn = true;

            res
                .status(200)
                .json({ user: userData, message: "Log In Successful!" });
            return;
        });
    } catch (err) {
        res.status(404).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

router.post('/signup', async (req, res) => {
    try {
        // Check if email already exists
        const checkEmailExistsData = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (checkEmailExistsData) {
            res
                .status(404)
                .json({ message: "Email already exists!" });
            return;
        }

        // Check if Username already exists
        const checkUsernameExistsData = await User.findOne({
            where: {
                username: req.body.username
            }
        });
        if (checkUsernameExistsData) {
            res
                .status(404)
                .json({ message: "Username already exists!" });
            return;
        }

        // Otherwise, create a new user
        await User.create(req.body);

        // Save session and log in the user
        req.session.save(() => {
            req.session.loggedIn = true;
            res
                .status(200)
                .json({ user: req.body, message: `Successfully created account for ${req.body.username}` });
        })

    } catch (err) {
        res.status(404).json({ message: "Error in registering user" });
    }
});


module.exports = router;