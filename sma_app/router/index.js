const router = require('express').Router;
const renterRoute = require('./renterRoute.js');
const ownerRoute = require('./ownerRoute.js');

// router.get('/', ); //login page
router.use('/renter',renterRoute);
router.use('/owner', ownerRoute);