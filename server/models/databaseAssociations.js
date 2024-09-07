exports.createAssociations = () =>{
    const Beer = require('./beer');
    const Brewery = require('./brewery');

    // Beer --> Brewery
    Beer.belongsTo(Brewery, {
        foreignKey: 'breweryId',
        as: 'brewery',
    });
    Brewery.hasMany(Beer, {
        foreignKey: 'breweryId',
        as: 'beers',
    });
};

