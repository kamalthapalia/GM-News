const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      unique: [true],
      required: [true, "Please enter a valid title."],
      minlength: [10, "Minimum 10 characters."],
      maxlength: [250, "Maximum 250 characters."],
    },
    content: {
      type: String,
      required: [true, "Body cannot be empty."],

      minlength: [100, "Minimum 100 characters."],
      maxlength: [2500, "Maximum 2500 characters."],
    },
    cat: {
      type: String,
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);
const blog = mongoose.model("blog", blogSchema);
module.exports = blog;
