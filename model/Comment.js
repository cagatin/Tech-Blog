const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { };

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'posts',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        modelName: 'comments'
    }
);

module.exports = Comment;