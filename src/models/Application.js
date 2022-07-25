const mongoose = require("mongoose");
const validator = require("validator");


const applicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate(email) {
        if (!validator.isEmail(email)) {
          throw new Error("Invalid email");
        }
      },
    },
    qualification: {
      type: String,
      required: true,
    },
    coverLetter: {
      type: String,
      required: true,
    },
    availability: {
      type: String,
      required: true,
    },
    assessment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);


const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;