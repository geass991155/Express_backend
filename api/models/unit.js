const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../db");

class JshUnit extends Model {}

JshUnit.init(
  {
    id: {
      type: DataTypes.BIGINT({ length: 11 }),
      autoIncrement: true,
      primaryKey: true,
    },
    lang: {
      type: DataTypes.STRING({ length: 100 }),
    },
    title: {
      type: DataTypes.STRING({ length: 100 }),
    },
    state: {
      type: DataTypes.TINYINT({ length: 4 }),
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
    tableName: 'jsh_unit',
  }
);


module.exports = JshUnit;
