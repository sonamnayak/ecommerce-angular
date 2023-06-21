const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, index: true },
    email: { type: String, required: true, unique: true, index: true },
    tel: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Users", userSchema);