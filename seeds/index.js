const sequelize = require('../config/connection');
const userSeed = require('./userData');


async function seedData() {
    await sequelize.sync({ force: true });
    console.log('----------CONNECTION TO DATABASE ESTABLISHED----------');

    await userSeed();
    console.log('----------USER DATA SEEDED SUCCESSFULLY----------');


}