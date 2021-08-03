const newsServices = require("../services/news");
const newsRepo = require("../repository/news");
var log4js = require("log4js");

async function index(req, res) {
  try {
    const [news] = await newsRepo.index();
    
    res.json({ status: 1, data: { news} });
  } catch (err) {
    global.log4js.getLogger("error").error(err);
    res.json({ status: 0, data: [] });
  }
}

async function show(req, res) {
  try {
    const id = req.params.id;
    const result = await newsServices.show(id);

    res.json({ status: 1, data: result });
  } catch (err) {
    global.log4js.getLogger("error").error(err);
    res.json({ status: 0, data: null });
  }
}

module.exports = {
  index,
  show,
};
