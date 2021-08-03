const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../db");

class JshNewsLink extends Model {}

JshNewsLink.init(
  {
    id: {
      type: DataTypes.BIGINT({ length: 11 }),
      autoIncrement: true,
      primaryKey: true,
    },
    news_id: {
      type: DataTypes.BIGINT({ length: 10 }),
    },
    name: {
      type: DataTypes.STRING({ length: 200 }),
    },
    link: {
      type: DataTypes.STRING({ length: 100 }),
    },
    ordering: {
      type: DataTypes.BIGINT({ length: 10 }),
    },
    state: {
      type: DataTypes.TINYINT({ length: 4 }),
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    tableName: "jsh_news_link",
  }
);

module.exports = JshNewsLink;
