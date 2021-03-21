const mongoose = require("mongoose");

const clickSchema = new mongoose.Schema({
  click_count: { type: Number, required: true }
});

module.exports = mongoose.model("Order", clickSchema);
