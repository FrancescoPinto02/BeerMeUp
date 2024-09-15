const Beer = require('../models/beer');
const Brewery = require('../models/brewery');
const createError = require('http-errors')
const { isValidId } = require('../validators/idValidator');

exports.getBeerById = async (id) => {
    if (!isValidId(id)) {
        throw createError(400, 'Invalid Beer ID');
    }
    const beer = await Beer.findByPk(id, {
        include: [
            {
                model: Brewery,
                as: 'brewery',
                attributes: ['name', 'city', 'state']
            }
        ]
    });
    if (!beer) {
        throw createError(404, 'Beer not found');
    }
    return beer;
};