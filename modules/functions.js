import weatherDataSchema from "../database/testSchema.js";

export const addLocation = async (location, current) => {
  try {
    await weatherDataSchema.create({ location, current });
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (city) => {
  try {
    const data = await weatherDataSchema.find({});

    if (data) {
      const cityObj = data.find((item) => {
        return item.location.name.toLowerCase() === city.toLowerCase();
      });

      return JSON.stringify({
        success: true,
        message: "Weather Data fetched successfully",
        cityObj,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const getAllCities = async () => {
  try {
    const data = await weatherDataSchema.find({});

    let cities = [];
    if (data) {
      data.forEach((item) => {
        cities.push(item.location.name);
      });

      return JSON.stringify({
        success: true,
        message: "Weather Data fetched successfully",
        cities,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateTemperature = async (city, temp) => {
  try {
    const data = await weatherDataSchema.find({});

    if (data) {
      const cityObj = data.find((item) => {
        return item.location.name.toLowerCase() === city.toLowerCase();
      });

      if (cityObj) {
        cityObj.current.tempC = temp || cityObj.current.tempC;

        await cityObj.save();

        return JSON.stringify({
          success: true,
          message: "City Updated Successfully",
        });
      } else {
        return JSON.stringify({
          success: false,
          message: "City not found",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteLocation = async (city) => {
  try {
    const data = await weatherDataSchema.find({});

    if (data) {
      const cityObj = data.find((item) => {
        return item.location.name.toLowerCase() === city.toLowerCase();
      });

      if (cityObj) {
        let item = await weatherDataSchema.findByIdAndDelete(cityObj._id);

        if (item) {
          return JSON.stringify({
            success: true,
            message: "City Deleted Successfully",
          });
        }
      } else {
        return JSON.stringify({
          success: false,
          message: "City not found",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
