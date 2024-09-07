const router = require('express').Router();
const BeerController = require('../controllers/beer');
const testMiddleware = require('../../middleware/test');

module.exports = (app) => {
    router.get('/:beerId', testMiddleware, BeerController.getBeerById);

    app.use('/beer', router);
};