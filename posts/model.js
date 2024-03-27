
// config/Users/model.js

const { Model, DataTypes } = require('sequelize');

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        title:{ 
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
      },
      {
        sequelize,
        modelName: 'Post',
      }
    );
  }
}

module.exports = Post;

