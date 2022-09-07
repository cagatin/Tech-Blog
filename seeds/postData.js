const Post = require('../model/Post');

const postData = [
    {
        title: "Zion National Park Still Beautiful!",
        content: "Man, That Utah Trip was amazing! Thankful to have gone with you all",
        user_id: 1
    },
    {
        title: "No Itches?",
        content: "After using this miracle cream, my body no longer itches! Super neat!",
        user_id: 2
    },
    {
        title: "Chemistry Between You and I",
        content: "I recently started a new job as a Senior Chem Analyst studying the chemical composition of humans!",
        user_id: 3

    },
    {
        title: "Tesla Again?",
        content: "As a Tesla owner, I doubt Elon's promise to deliver FSD in the coming years.",
        user_id: 4
    },
    {
        title: "Awesome harcuts!",
        content: "I can cut hair at Zion after the hike!",
        user_id: 4
    }
]

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;