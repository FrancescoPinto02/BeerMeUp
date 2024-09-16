const Beer = require('../models/beer');
const Brewery = require('../models/brewery');
const createError = require('http-errors')
const { isValidId } = require('../validators/idValidator');
const { isValidPage, isValidLimit } = require('../validators/paginationValidator');

const DEF_PAGE = 1;
const DEF_LIMIT = 16;

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

exports.getBeers = async (page=DEF_PAGE, limit=DEF_LIMIT) => {
    if(!isValidPage(page)) {
        throw createError(400, 'Invalid page number. It must be a positive integer.');
    }
    if(!isValidLimit(limit)) {
        throw createError(400, 'Invalid limit. It must be a positive integer and less than or equal to 100.');
    }
    const offset = (page - 1) * limit;
    const {count: total, rows: beers} = await Beer.findAndCountAll({
        include: [
            {
                model: Brewery,
                as: 'brewery',
                attributes: ['name', 'city', 'state']
            }
        ],
        limit: limit,
        offset: offset,
    });
    return {
        beers,
        total,
        page,
        totalPages: Math.ceil(total / limit),
    };
}