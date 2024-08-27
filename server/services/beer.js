const beerModel = require('../models/beer');

const beerService = {};

beerService.getAll = async () => {
    const beers = await beerModel.Beer.findAll();
    if (!beers) {
        throw new Error('Error retrieving beers data!');
    }

    return beers;
};

module.exports = beerService;