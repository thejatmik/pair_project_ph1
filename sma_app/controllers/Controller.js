class Controller {
    static getRoot(req, res) {
        res.send("hewo root controll owo");
    }
    static getLogin(req, res) {
        res.render("login");
    }
    static postLogin(req, res) {
        res.send(req.body);
    }
}

module.exports = Controller;