import axios from 'axios';

const API_KEY_WEATHER = process.env.NEXT_PUBLIC_API_KEY_WEATHER;
const BASE_URL_WEATHER = process.env.NEXT_PUBLIC_BASE_URL_WEATHER;

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL_WEATHER}/weather`, {
      params: {
        q: city,
        appid: API_KEY_WEATHER,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const getForecastByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL_WEATHER}/forecast`, {
      params: {
        q: city,
        appid: API_KEY_WEATHER,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw error;
  }
};

export const getWeatherByCoords = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL_WEATHER}/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY_WEATHER,
        units: 'metric',
      },
    });
    return response.data;
  }
  catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

export const getForecastByCoords = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL_WEATHER}/forecast`, {
      params: {
        lat,
        lon,
        appid: API_KEY_WEATHER,
        units: 'metric',
      },
    });
    return response.data;
  }
  catch (error) {
    console.error('Error fetching forecast data:', error);
    throw error;
  }
}

export const getUVIndex = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL_WEATHER}/uvi`, {
      params: {
        lat,
        lon,
        appid: API_KEY_WEATHER,
      },
    });
    return response.data.value;
  }
  catch (error) {
    console.error('Error fetching UV index data:', error);
    throw error;
  }
}