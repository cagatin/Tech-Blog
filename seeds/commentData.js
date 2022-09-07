const Comment = require('../model/Comment');

const commentData = [
    {
        user_id: 4,
        post_id: 1,
        content: 'It sure was!'
    },
    {
        user_id: 2,
        post_id: 5,
        content: 'Can you cut mine?'
    },
    {
        user_id: 3,
        post_id: 4,
        content: 'You bought one again?'
    },
    {
        user_id: 1,
        post_id: 3,
        content: 'Congrats on the new job!'
    },

]

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;