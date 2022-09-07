const sequelize = require('../config/connection');
const userSeed = require('./userData');
const postSeed = require('./postData');
const commentSeed = require('./commentData');


async function seedData() {
    await sequelize.sync({ force: true });
    console.log('----------CONNECTION TO DATABASE ESTABLISHED----------');

    await userSeed();
    console.log('----------USER DATA SEEDED SUCCESSFULLY----------');

    await postSeed();
    console.log('----------POST DATA SEEDED SUCCESSFULLY----------');

    await commentSeed();
    console.log('----------COMMENT DATA SEEDED SUCCESSFULLY----------');
}

seedData();