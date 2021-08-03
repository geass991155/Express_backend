const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../db");

class JshNewsMedia extends Model {}

JshNewsMedia.init(
  {
    id: {
      type: DataTypes.BIGINT({ length: 11 }),
      autoIncrement: true,
      primaryKey: true,
    },
    news_id: {
      type: DataTypes.BIGINT({ length: 10 }),
    },
    img: {
      type: DataTypes.STRING({ length: 200 }),
    },
    content: {
      type: DataTypes.TEXT,
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
    tableName: "jsh_news_media",
  }
);

module.exports = JshNewsMedia;
