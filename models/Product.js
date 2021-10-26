const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  description: String,
  color: String,
  quantity: { type: Number, min: 0 },
  price: { type: Number, values: 12 },
});

module.exports = mongoose.model("Product", ProductSchema);
