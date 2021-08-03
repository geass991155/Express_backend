const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

// 取環境檔資料
const DB_DATABASE = process.env.DB_DATABASE;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;

// 參數連接DB
const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  timezone: "+08:00",
  logging: (msg) => global.log4js.getLogger("sql").trace(msg)
});

// 驗證DB通過與不通過顯示Logs
sequelize
  .authenticate()
  .then(() => {
    global.log4js.getLogger("db-connection").trace("Connection has been established successfully.");
  })
  .catch((err) => {
    global.log4js.getLogger("db-connection").error("Unable to connect to the database:", err);
  });

module.exports = sequelize;