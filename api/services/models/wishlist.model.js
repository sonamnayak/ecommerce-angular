const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema(
  {
    img: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Wishlist", wishlistSchema);
