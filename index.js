const express = require("express");
const dotenv = require("dotenv");
require("./utils/log4");

const newsRouter = require("./api/route/news");

dotenv.config();

const app = express();

// 呼叫中介軟裡
app.use("/api/v1/news", newsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Nodejs server is listening ${PORT} port`);
});
