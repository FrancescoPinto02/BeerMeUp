const beerService = require('../../services/beer');
const utils = require('../../utils/utils');

exports.getBeerById = async(req, res, next) => {
    try {
        const {beerId} = req.params;
        const beer = await beerService.getBeerById(beerId);
        return res.status(200).render('product', {beer: utils.convertToPlain(beer)});
    }catch(error) {
        next(error);
        return null;
    }
};

exports.getBeers = async(req, res, next) => {
    const {page, limit} = req.query;
    try {
        const products = await beerService.getBeers(parseInt(page), parseInt(limit));
        products.beers = utils.convertToPlain(products.beers);
        return res.status(200).render('shop', {products: products});
    }catch(error) {
        next(error);
        return null;
    }
};