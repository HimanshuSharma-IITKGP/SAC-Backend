const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
require("./db/mongoose");
const ApplicationRouter = require("./routers/Application");
// const taskRouter = require("./routers/task");
const app = express();
app.use(cors());
const port = process.env.PORT || 8000;

const multer = require("multer");
const upload = multer({
  dest: "images",
});

app.use(express.json()); // after adding this line express automatically parse the incoming json and converts it to an object
app.use(ApplicationRouter);
// app.use(taskRouter);
app.listen(port, () => {
  console.log(chalk.green.bold.inverse(`Server is up on ${port}`));
});
