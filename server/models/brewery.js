const {DataTypes } = require('sequelize');
const sequelize = require('./database');

const Brewery = sequelize.define('Brewery', {
   id: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false,
   },
    name: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING(2),
        allowNull: false,
    },
},{
    tableName: 'Breweries',
    timestamps: false,
});

module.exports = Brewery;