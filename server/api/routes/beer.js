const router = require('express').Router();
const beerController = require('../controllers/beer');
const testMiddleware = require('../../middleware/test');

module.exports = app => {
    router.get('/', testMiddleware, beerController.getBeers);

    app.use('/api/beer', router);
};