const { Owner, Renter } = require('../models/index');

class Controller {
    static getRoot(req, res) {
        res.send("hewo root controll owo");
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
                }
            })
        ])
        .then(arrRes => {
            let login = [];
            for (let item of arrRes) {
                if (item.length > 0) {
                    login = item;
                    if (item[0] instanceof Renter) {
                        login.push("renter");
                    } else if (item[0] instanceof Owner) {
                        login.push("owner");
                    } 
                }
            }
            if (login.length === 0) {
                req.session.failLogin = "Username/pass did not match";
                res.redirect("/login");
            } else {
                req.session.isLogin = true;
                req.session.user = login[0];
                let path = `/${login[1]}`
                res.redirect(path)
            }
        })
        .catch(err => {
            res.send(err);
        });
        // res.send(req.body);
    }
}
module.exports = Controller;