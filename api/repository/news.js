
const JshNews = require("../models/news");
const { literal, fn, col, Op } = require("sequelize");
var log4js = require("log4js");

async function index() {
  try {
    const news = JshNews.findAll({
      attributes: [
        "id",
        "title",
        "content",
      ],
      raw: true,
      nest: true,
    });

    return Promise.all([news]);
  } catch (err) {
    global.log4js.getLogger("error").error(err);
    return [];
  }
}

async function show(id) {
  try {
    return await JshNews.findOne({
      attributes: [
        "id",
        "title",
        "content",
      ],
      where: {
        state: 1,
        id
      },
    });
  } catch (err) {
    global.log4js.getLogger("error").error(err);
    return null;
  }
}


module.exports = {
  index,
  show,
};
