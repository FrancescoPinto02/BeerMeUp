const {DataTypes } = require('sequelize');
const sequelize = require('./database');

const beer = {};

const Beer = sequelize.define('Beer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
}, {
    tableName: 'Beers',
});

beer.Beer = Beer;

module.exports = beer;