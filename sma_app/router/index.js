const router = require('express').Router();
const Controller = require('../controllers/Controller.js')
const renterRoute = require('./renterRoute.js');
const ownerRoute = require('./ownerRoute.js');
const canLogout = require('../middlewares/canLogout.js');
const isRenter = require('../middlewares/isRenter');
const isOwner = require('../middlewares/isOwner');

router.get("/", Controller.getRoot);
router.get("/login", Controller.getLogin);
router.post("/login", Controller.postLogin);
router.get("/logout", canLogout, Controller.getLogout);
router.use('/renter', isRenter, renterRoute);
router.use('/owner', isOwner, ownerRoute);

module.exports = router;
