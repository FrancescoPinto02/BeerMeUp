const beerService = require('../../services/beer');

exports.getBeers = async(req, res, next) => {
    const {page, limit} = req.query;
    try {
        const beers = await beerService.getBeers(parseInt(page), parseInt(limit));
        res.status(200).json(beers);
    }catch(error) {
        next(error);
    }
};