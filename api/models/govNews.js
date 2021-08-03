const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../db");
const JshNewsCategories = require("./newsCategories");

class JshGovNews extends Model {}

JshGovNews.init(
  {
    id: {
      type: DataTypes.BIGINT({ length: 11 }).UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.BIGINT({ length: 100 }),
    },
    catid: {
      type: DataTypes.BIGINT({ length: 10 }).UNSIGNED,
    },
    content: {
      type: DataTypes.TEXT,
    },
    filelist: {
      type: DataTypes.TEXT,
    },
    serno: {
      type: DataTypes.BIGINT({ length: 20 }).UNSIGNED,
    },
    unit_name: {
      type: DataTypes.STRING({ length: 100 }),
    },
    state: {
      type: DataTypes.TINYINT({ length: 4 }),
    },
    hits: {
      type: DataTypes.BIGINT({ length: 10 }),
    },
    publish_up: {
      type: DataTypes.DATE,
    },
    publish_down: {
      type: DataTypes.DATE,
    },
    created: {
      type: DataTypes.DATE,
    },
    created_by: {
      type: DataTypes.BIGINT({ length: 10 }),
    },
    modified: {
      type: DataTypes.DATE,
    },
    modified_by: {
      type: DataTypes.BIGINT({ length: 10 }),
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    tableName: "jsh_gov_news",
  }
);

JshGovNews.belongsTo(JshNewsCategories, {
  foreignKey: "catid",
  as: "categories",
});
JshNewsCategories.hasMany(JshGovNews, { foreignKey: "catid" });

module.exports = JshGovNews;
