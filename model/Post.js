const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { };

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
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