const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  side: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("Order", orderSchema);
