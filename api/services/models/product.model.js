const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    _id: { type: ObjectId },
    img: { type: String, required: true, unique: true, index: true },
    cat: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    colors: { type: Array, required: true },
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('Products', productSchema)