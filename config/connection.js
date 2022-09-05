// import sequelize
const Sequelize = require('sequelize');
// load environmental variables
require('dotenv').config();

let sequelize;

// creating the Sequelize instance
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PW,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3000
        }
    )
}