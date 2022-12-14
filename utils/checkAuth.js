function checkAuth(req, res, next) {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        return next();
    }
}

module.exports = checkAuth;