const router = require('express').Router();
const beerController = require('../controllers/beer');

module.exports = app => {
    router.get('/', beerController.getBeers);

    app.use('/shop', router);
};