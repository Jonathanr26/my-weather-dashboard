import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HourlyForecast from '../src/components/HourlyForecast';

const mockForecast = {
  list: [
    { dt: 1625580000, main: { temp: 25 }, wind: { speed: 10 }, weather: [{ icon: '01d', description: 'clear sky' }] },
    { dt: 1625583600, main: { temp: 26 }, wind: { speed: 12 }, weather: [{ icon: '01d', description: 'clear sky' }] },
    { dt: 1625587200, main: { temp: 27 }, wind: { speed: 11 }, weather: [{ icon: '01d', description: 'clear sky' }] },
    { dt: 1625590800, main: { temp: 28 }, wind: { speed: 13 }, weather: [{ icon: '01d', description: 'clear sky' }] },
    { dt: 1625594400, main: { temp: 29 }, wind: { speed: 14 }, weather: [{ icon: '01d', description: 'clear sky' }] },
    { dt: 1625598000, main: { temp: 30 }, wind: { speed: 15 }, weather: [{ icon: '01d', description: 'clear sky' }] },
  ],
};

describe('HourlyForecast', () => {
  it('renders correctly with forecast data', () => {
    const { getByText, getAllByAltText } = render(<HourlyForecast forecast={mockForecast} />);
    
    expect(getByText('Hourly Forecast')).toBeInTheDocument();

    mockForecast.list.slice(0, 6).forEach((item) => {
      const time = new Date(item.dt * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      expect(getByText(time)).toBeInTheDocument();
      expect(getByText(`${item.main.temp.toFixed(1)}°C`)).toBeInTheDocument();
      expect(getByText(`${item.wind.speed} km/h`)).toBeInTheDocument();
    });

    const images = getAllByAltText(/Weather icon: /i);
    expect(images).toHaveLength(6);
    images.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('01d.png'));
    });
  });

  it('renders null when forecast is not provided', () => {
    const { container } = render(<HourlyForecast />);
    expect(container).toBeEmptyDOMElement();
  });
});
