const router = require('express').Router();
const Controller = require('../controllers/Controller.js')
const renterRoute = require('./renterRoute.js');
const ownerRoute = require('./ownerRoute.js');

router.get("/", Controller.getRoot);
router.get("/login", Controller.getLogin);
router.post("/login", Controller.postLogin);
router.use('/renter', renterRoute);
router.use('/owner', ownerRoute);

module.exports = router;