const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    type: { type: String, enum: ["Point"], required: true },
    coordinates: { type: [Number], required: true },
  },
  ratings: { type: [Number], default: [] },
});

RestaurantSchema.index({ location: "2dsphere" });

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
