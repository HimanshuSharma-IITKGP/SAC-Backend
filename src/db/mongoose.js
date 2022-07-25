const mongoose = require("mongoose");
const dotenv = require('dotenv')

dotenv.config();

console.log(process.env.MONGODB_URI);
const username = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);

mongoose.connect(
  `mongodb+srv://${username}:${password}@joboffersapplication.jmaojni.mongodb.net/test`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

