import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DetailedWeatherCard from '../src/components/DetailedWeatherCard';

const mockWeather = {
  main: {
    temp: 25,
    feels_like: 27,
    humidity: 60,
    pressure: 1012,
  },
  weather: [
    {
      icon: '01d',
      description: 'Clear sky',
    },
  ],
  sys: {
    sunrise: 1717762583,
    sunset: 1717810303,
  },
  wind: {
    speed: 10,
  },
};

const mockUvIndex = 5;

describe('DetailedWeatherCard', () => {
  it('renders correctly with given weather data', () => {
    const { getByText, getByAltText } = render(
      <DetailedWeatherCard weather={mockWeather} uvIndex={mockUvIndex} />
    );

    expect(getByText('25°C')).toBeInTheDocument();
    expect(getByText('Feels like: 27°C')).toBeInTheDocument();
    expect(getByAltText('Weather icon showing Clear sky')).toBeInTheDocument();
    expect(getByText('Clear sky')).toBeInTheDocument();
    expect(getByText('Humidity')).toBeInTheDocument();
    expect(getByText('60%')).toBeInTheDocument();
    expect(getByText('Wind Speed')).toBeInTheDocument();
    expect(getByText('10 km/h')).toBeInTheDocument();
    expect(getByText('Pressure')).toBeInTheDocument();
    expect(getByText('1012 hPa')).toBeInTheDocument();
    expect(getByText('UV Index')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
  });

  it('renders correctly with sunrise and sunset times', () => {
    const { getByText } = render(
      <DetailedWeatherCard weather={mockWeather} uvIndex={mockUvIndex} />
    );

    expect(getByText('Sunrise')).toBeInTheDocument();
    expect(getByText('06:16')).toBeInTheDocument();
    expect(getByText('Sunset')).toBeInTheDocument();
    expect(getByText('19:31')).toBeInTheDocument();
  });

  it('returns null when weather data is not provided', () => {
    const { container } = render(
      <DetailedWeatherCard weather={null} uvIndex={mockUvIndex} />
    );
    expect(container.firstChild).toBeNull();
  });
});
