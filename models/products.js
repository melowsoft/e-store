const mongoose = require("mongoose");

//Products schema
const ProductsSchmema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  }
});

const Products = (module.exports = mongoose.model("Products", ProductsSchmema));
