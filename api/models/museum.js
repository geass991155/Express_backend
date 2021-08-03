const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../db");

class JshMuseum extends Model {}

JshMuseum.init(
  {
    id: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
    lang: {
      type: DataTypes.STRING({ length: 100 }),
    },
    title: {
      type: DataTypes.STRING({ length: 100 }),
    },
    simple: {
      type: DataTypes.STRING({ length: 100 }),
    },
    state: {
      type: DataTypes.TINYINT({ length: 4 }),
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    tableName: "jsh_museum",
  }
);

module.exports = JshMuseum;
