const Brewery = require('../models/brewery');

exports.getBreweryById = async (id) => {
    try {
        const brewery = await Brewery.findByPk(id);
        return brewery;
    } catch (error) {
        throw new Error(`Error fetching brewery: ${error.message}`);
    }
};