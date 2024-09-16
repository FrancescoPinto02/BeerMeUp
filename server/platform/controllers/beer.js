const beerService = require('../../services/beer');
const utils = require('../../utils/utils');

exports.getBeerById = async (req, res, next) => {
    try {
        const {beerId} = req.params;
        const beer = await beerService.getBeerById(beerId);
        return res.status(200).render("test", {beer: utils.convertToPlain(beer)});
    }catch(error) {
        next(error);
    }
}