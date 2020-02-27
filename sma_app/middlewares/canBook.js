function canBook (req, res, next) {
    if (req.session.user.Booking) {
        res.redirect("/renter/bookingdetail")
    } else {
        next();
    }
}

module.exports = canBook;