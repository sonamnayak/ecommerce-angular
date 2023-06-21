const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    img: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true, unique: true, index: true },
    cat: { type: String, required: true, unique: true, index: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('Categories', categorySchema)