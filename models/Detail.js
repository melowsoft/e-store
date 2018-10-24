const mongoose = require("mongoose");

//Details Schema
const DetailSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  desc: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: true
  },

  color: {
    type: String,
    required: true
  }
});

const Detail = (module.exports = mongoose.model("Detail", DetailSchema));
