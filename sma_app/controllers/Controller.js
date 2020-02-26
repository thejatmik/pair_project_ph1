const { Owner, Renter } = require('../models/index');

class Controller {
    static getRoot(req, res) {
        res.send("hewo root controll owo");
    }
    static getLogin(req, res) {
        res.render("login");
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
        // .then(([owner, renter]) => {
        .then(arrRes => {
            let login;
            for (let item of arrRes) {
                if (item.length > 0) {
                    // login = item;
                    login = typeof item;
                    // login.push(item[0].instanceof)
                }
            }
            res.send(login);
        })
        .catch(err => {
            res.send(err);
        });
        // res.send(req.body);
    }
}

module.exports = Controller;