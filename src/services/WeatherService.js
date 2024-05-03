// WeatherService.js

import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const WeatherService = {
  getWeatherData: async (city) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/weather/${city}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  },

  getWeatherForecast: async (city) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/forecast/${city}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching weather forecast:", error);
      throw error;
    }
  },
};

export default WeatherService;
