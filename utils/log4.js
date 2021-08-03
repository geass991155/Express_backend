const log4js = require("log4js");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const DIRECTORY = process.env.LOG_DIRECTORY;

log4js.configure({
  appenders: {
    console: { type: "console" },
    access: {
      type: "dateFile",
      filename: path.resolve(DIRECTORY, "access"),
      pattern: "yyyy-MM-dd.log",
      alwaysIncludePattern: true,
      category: "access",
    },
    "db-connection": {
      type: "dateFile",
      filename: path.resolve(DIRECTORY, "db", "connection"),
      pattern: "yyyy-MM-dd.log",
      alwaysIncludePattern: true,
      backups: 3,
      maxLogSize: 1024 * 1024,
      category: "db-connection",
    },
    sql: {
      type: "dateFile",
      filename: path.resolve(DIRECTORY, "db", "query"),
      pattern: "yyyy-MM-dd.log",
      alwaysIncludePattern: true,
      category: "sql",
    },
    error: {
      type: "dateFile",
      filename: path.resolve(DIRECTORY, "error"),
      pattern: "yyyy-MM-dd.log",
      alwaysIncludePattern: true,
      category: "error",
    },
  },
  categories: {
    default: { appenders: ["console"], level: "trace" },
    access: { appenders: ["access"], level: "trace" },
    "db-connection": { appenders: ["db-connection"], level: "trace" },
    sql: { appenders: ["sql"], level: "trace" },
    error: {
      appenders: ["error"],
      level: "error",
    },
  },
  pm2: true
});

global.log4js = log4js;
