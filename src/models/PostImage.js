const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PostImage = sequelize.define(
  "PostImage",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "post_images",
  }
);

module.exports = PostImage;
