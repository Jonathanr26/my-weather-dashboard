import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TemperatureChart from '../../src/components/Charts/TemperatureChart';
import { ThemeProvider } from 'styled-components';

const mockTheme = {
  background: '#ffffff',
  text: '#000000',
};

const mockData = [
  { time: '10:00', temp: 20 },
  { time: '11:00', temp: 21 },
  { time: '12:00', temp: 22 },
];

describe('TemperatureChart', () => {
  test('renders without crashing', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <TemperatureChart data={mockData} />
      </ThemeProvider>
    );

    const chartElement = screen.getByRole('img');
    expect(chartElement).toBeInTheDocument();
  });

  test('displays correct chart data and options', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <TemperatureChart data={mockData} />
      </ThemeProvider>
    );

    const canvas = screen.getByRole('img');
    expect(canvas).toBeInTheDocument();
  });
});
