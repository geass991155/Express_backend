const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../db");

class JshNewsFile extends Model {}

JshNewsFile.init(
  {
    id: {
      type: DataTypes.BIGINT({ length: 11 }),
      autoIncrement: true,
      primaryKey: true,
    },
    news_id: {
      type: DataTypes.BIGINT({ length: 10 }),
    },
    file: {
      type: DataTypes.STRING({ length: 200 }),
    },
    original_file: {
      type: DataTypes.STRING({ length: 100 }),
    },
    extension: {
      type: DataTypes.STRING({ length: 100 }),
    },
    odf_file: {
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
    tableName: "jsh_news_file",
  }
);

module.exports = JshNewsFile;
