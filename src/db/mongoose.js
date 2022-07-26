const mongoose = require("mongoose");
const dotenv = require('dotenv')

dotenv.config();

console.log(process.env.DB_URL);
// const username = encodeURIComponent(process.env.DB_USERNAME);
// const password = encodeURIComponent(process.env.DB_PASSWORD);

mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

