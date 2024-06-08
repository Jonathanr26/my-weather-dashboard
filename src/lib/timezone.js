import axios from 'axios';

const API_KEY_TIMEZONE = process.env.NEXT_PUBLIC_API_KEY_TIMEZONE;
const BASE_URL_TIMEZONE = process.env.NEXT_PUBLIC_BASE_URL_TIMEZONE;

export const getTimeZone = async (lat, lon) => {
  try {
    const response = await axios.get(BASE_URL_TIMEZONE, {
      params: {
        key: API_KEY_TIMEZONE,
        format: 'json',
        by: 'position',
        lat,
        lng: lon
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching timezone data:', error);
    throw error;
  }
};
