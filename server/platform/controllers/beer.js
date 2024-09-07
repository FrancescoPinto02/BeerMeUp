const BeerService = require('../../services/beer');
const utils = require('../../utils/utils');

exports.getBeerById = async (req, res) => {
    try {
        const {beerId} = req.params;
        const beer = await BeerService.getBeerById(beerId);
        if(!beer) {
            return res.status(404).render("error", {message: 'Beer not found.' });
        }
        return res.status(200).render("test", {beer: utils.convertToPlain(beer)});
    }catch(error) {
        return res.status(500).render("error", {message: error.message});
    }
}