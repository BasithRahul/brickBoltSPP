const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, default: "" },
  rating: { type: Number, required: true, min: 1, max: 5 },
  text: { type: String, required: true },
  role: { type: String, default: "Customer" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", ReviewSchema);
