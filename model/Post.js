const { Model, DataType } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { };

Post.init(
    {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
        },
        content: {
            type: DataType.STRING,
            allowNull: true,
        },
        username: {
            type: DataType.STRING,
            allowNull: false,
        },
        date: {
            type: DataType.DATE,
            allowNull: false,
        },

    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        modelName: 'posts'
    }
);

module.exports = Post;