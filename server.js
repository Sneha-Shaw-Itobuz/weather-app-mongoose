import mongoose from "mongoose";
import express from "express";
import {
  addLocation,
  getWeatherData,
  getAllCities,
  deleteLocation,
  updateTemperature,
} from "./modules/functions.js";

const app = express();

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening in ${PORT}`);
});

const url =
  "mongodb+srv://sneha:1234@cluster0.sxavqzw.mongodb.net/test?retryWrites=true&w=majority";

async function connection() {
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDb");
    })
    .catch((err) => {
      console.error(err);
    });
}

connection();
// addLocation(
//   {
//     country: "United Kingdom",
//     name: "London",
//     region: "City of London",
//   },
//   {
//     feelslikeC: 1.2,
//     tempC: 4,
//   }
// );

//   let data = await getAllCities();
//   console.log(data, "data");

// let data = await getWeatherData("Kolkata");
// console.log(data, "data");

// let data = await deleteLocation("Patna");
// console.log(data, "data");

// let data = await updateTemperature("Kolkata", 32);
// console.log(data, "data");
