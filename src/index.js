const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
require("./db/mongoose");
const ApplicationRouter = require("./routers/Application");

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;



app.use(express.json());
app.use(ApplicationRouter);

app.listen(port, () => {
  console.log(chalk.green.bold.inverse(`Server is up on ${port}`));
});
