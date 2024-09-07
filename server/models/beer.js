const {DataTypes } = require('sequelize');
const sequelize = require('./database');
const Brewery = require('./brewery');

const Beer = sequelize.define('Beer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    style: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    breweryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Brewery,
            key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    ibu: {
        type: DataTypes.TINYINT,
        allowNull: false,
    },
    abv: {
        type: DataTypes.DECIMAL(3, 1),
        allowNull: false,
    },
    ounces: {
        type: DataTypes.DECIMAL(3, 1),
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0, // Valore predefinito
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    imagePath: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
}, {
    tableName: 'Beers',
    timestamps: false,
});

module.exports = Beer;