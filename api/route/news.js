const router = require("express").Router();
const newsController = require("../controllers/news");

router.get("/", newsController.index);
console.log(newsController);
router.get("/:id", newsController.show)

module.exports = router;