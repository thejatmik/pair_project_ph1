function hasBooking (req, res, next) {
    if (req.session.user.Booking === null) {
        res.redirect('/renter/availablecars');
    } else {
        next()
    }
}

module.exports = hasBooking;