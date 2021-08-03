const newsRepo = require("../repository/news");

async function show(id) {
  try {
    const news = await newsRepo.show(id);

    if (news) {
      const entity = news.get({ plain: true });

      entity.file = entity.file.filter((e) => e.state === 1);
      entity.link = entity.link.filter((e) => e.state === 1);
      entity.media = entity.media.filter((e) => e.state === 1);
      return entity;
    }

    return await newsRepo.showGov(id);
  } catch (err) {
    global.log4js.getLogger("error").error(err);
    return null;
  }
}

module.exports = { show };
