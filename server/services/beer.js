const Beer = require('../models/beer');

exports.getBeerById = async (id) => {
    try {
        const beer = await Beer.findByPk(id);
        return beer;
    } catch (error) {
        throw new Error(`Error fetching beer: ${error.message}`);
    }
};