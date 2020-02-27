function isRenter (req, res, next) {
    if (!req.session.user) {
        res.redirect("/login")
    } else if (req.session.userType === "renter") {
        res.redirect("/renter")
    } else {
        next()
    }
}

module.exports = isRenter;