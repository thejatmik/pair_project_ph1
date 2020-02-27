const { Owner, Renter, Booking } = require('../models/index');

class Controller {
    static getRoot(req, res) {
        console.log(req.session.user)
        res.render("index");
    }
    static getLogin(req, res) {
        let msg = [];
        if (req.session.failLogin) {
            msg.push(req.session.failLogin);
            delete req.session.failLogin;
        }
        res.render("login", {msg: msg});
    }
    static postLogin(req, res) {
        Promise.all([
            Owner.findAll({
                where: {
                    username: req.body.username,
                    password: req.body.password
                }
            }),
            Renter.findAll({
                where: {
                    username: req.body.username,
                    password: req.body.password
                },
                include: [ Booking ]
            })
        ])
        .then(arrRes => {
            let path = '';
            if (arrRes[0].length > 0) {
                req.session.user = arrRes[0][0]
                req.session.userType = "owner"
                path = '/owner';
            } else if (arrRes[1].length > 0) {
                req.session.user = arrRes[1][0]
                req.session.userType = "renter"
                path = '/renter';
                if (arrRes[1][0].Booking) {
                    (arrRes[1][0].Booking.bookStatus) ? path += '/bookingdetail' : path+= '/availablecars';
                } else {
                    path = "/renter/availablecars"
                }
            } else {
                req.session.failLogin = "Username/pass did not match";
                res.redirect("/login");
            }
            res.redirect(path);
        })
        .catch(err => {
            res.send(err);
        });
    }
    static getLogout(req, res) {
        req.session.destroy(() => {
            res.redirect("/")
        });
    }
}
module.exports = Controller;