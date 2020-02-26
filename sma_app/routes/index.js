const router = require('express').Router();
const Controller = require('../controllers/Controller');

router.get("/", Controller.getRoot);
router.get("/login", Controller.getLogin);
router.post("/login", Controller.postLogin);

module.exports = router;