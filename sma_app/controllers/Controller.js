const { Owner } = require('../models/index');

class Controller {
    static getRoot(req, res) {
        res.send("hewo root controll owo");
    }
    static getLogin(req, res) {
        res.render("login");
    }
    static postLogin(req, res) {
        Owner.findAll()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
        // res.send(req.body);
    }
}

module.exports = Controller;