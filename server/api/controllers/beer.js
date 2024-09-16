const beerService = require('../../services/beer');
const utils = require('../../utils/utils');

exports.getBeers = async (req, res, next) => {
    const {page, limit} = req.query;
    console.log(page);
    console.log(limit);
    try {
        const beers = await beerService.getBeers(parseInt(page), parseInt(limit));
        res.status(200).json(beers);
    }catch(error) {
        next(error);
    }
};