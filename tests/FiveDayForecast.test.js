import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FiveDayForecast from '../src/components/FiveDayForecast';

const mockForecast = {
  list: [
    {
      dt: 1625580000,
      main: { temp: 25 },
      weather: [{ description: 'clear sky', icon: '01d' }],
    },
    {
      dt: 1625666400,
      main: { temp: 26 },
      weather: [{ description: 'clear sky', icon: '01d' }],
    },
    {
      dt: 1625752800,
      main: { temp: 27 },
      weather: [{ description: 'clear sky', icon: '01d' }],
    },
    {
      dt: 1625839200,
      main: { temp: 28 },
      weather: [{ description: 'clear sky', icon: '01d' }],
    },
    {
      dt: 1625925600,
      main: { temp: 29 },
      weather: [{ description: 'clear sky', icon: '01d' }],
    },
  ],
};

describe('FiveDayForecast', () => {
  it('renders correctly with forecast data', () => {
    const { getByText, getAllByText, getAllByAltText } = render(
      <FiveDayForecast forecast={mockForecast} />
    );

    expect(getByText('5 Days Forecast')).toBeInTheDocument();

    mockForecast.list.slice(0, 5).forEach((item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      expect(getByText(date)).toBeInTheDocument();
      expect(getByText(`${item.main.temp.toFixed(1)}°C`)).toBeInTheDocument();
    });

    const descriptions = getAllByText('clear sky');
    expect(descriptions).toHaveLength(5);

    const images = getAllByAltText(/clear sky/i);
    expect(images).toHaveLength(5);
    images.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('01d.png'));
    });
  });

  it('renders null when forecast is not provided', () => {
    const { container } = render(<FiveDayForecast />);
    expect(container).toBeEmptyDOMElement();
  });
});
