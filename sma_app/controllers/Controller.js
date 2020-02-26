<<<<<<< HEAD
const { Owner } = require('../models/index');

=======
>>>>>>> 62c26435ca2058d0c584c7929a2303a54532b3eb
class Controller {
    static getRoot(req, res) {
        res.send("hewo root controll owo");
    }
    static getLogin(req, res) {
        res.render("login");
    }
    static postLogin(req, res) {
<<<<<<< HEAD
        Owner.findAll()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
        // res.send(req.body);
=======
        res.send(req.body);
>>>>>>> 62c26435ca2058d0c584c7929a2303a54532b3eb
    }
}

module.exports = Controller;