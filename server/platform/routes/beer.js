const router = require('express').Router();
const beerController = require('../controllers/beer');
const testMiddleware = require('../../middleware/test');

module.exports = app => {
    router.get('/:beerId', testMiddleware, beerController.getBeerById);

    app.use('/beer', router);
};