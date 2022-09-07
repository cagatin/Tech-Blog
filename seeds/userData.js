const User = require('../model/User');

const userData = [
    {
        username: "felix_cagatin",
        email: "gilbertcagatin@gmail.com",
        password: "testpassword"
    },
    {
        username: "gian_oc",
        email: "gianocampo@gmail.com",
        password: "testpassword"
    },
    {
        username: "bri_ngyn",
        email: "briannguyen@gmail.com",
        password: "testpassword"
    },
    {
        username: "jmunji",
        email: "jarvismunji@gmail.com",
        password: "testpassword"
    },
    {
        username: "sandeski",
        email: "sandeshmud@gmail.com",
        password: "testpassword"
    },
]

const userSeed = () => User.bulkCreate(userData);

module.exports = userSeed;