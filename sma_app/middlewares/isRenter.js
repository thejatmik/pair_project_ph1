function isRenter (req, res, next) {
    if (!req.session.user) {
        res.redirect("/login")
    } else if (req.session.userType === "owner") {
        res.redirect("/owner")
    } else {
        next();
    }
}

module.exports = isRenter;