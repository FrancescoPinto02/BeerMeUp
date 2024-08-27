const {Sequelize} = require('sequelize');

// Database Connection
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        pool: {
            max: 100,
            min: 0,
            idle: 30000,
            acquire: 10000
        },
        query: {
            raw: false
        },
        define: {
            underscored: false,
            freezeTableName: false,
            timestamps: false,
            charset: 'utf8',
            dialectOptions: {
                collate: 'utf8_general_ci'
            },
        },
        logging: process.env.DB_LOGING > 0,
        sync: false,
        timezone: '+01:00'
    }
);

// Testing Connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

module.exports = sequelize;