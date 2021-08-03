const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../db");

class JshNews extends Model {}

JshNews.init(
  {
    id: {
      type: DataTypes.BIGINT({ length: 11 }),
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING({ length: 100 }),
    },
    content: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "news",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = JshNews;
