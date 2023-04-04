import mongoose from "mongoose";

const weatherDataSchema = new mongoose.Schema({
  location: {
    country: String,
    name: String,
    region: String,
  },
  current: {
    feelslikeC: Number,
    tempC: Number,
  },
});

export default mongoose.model("weatherData", weatherDataSchema);
