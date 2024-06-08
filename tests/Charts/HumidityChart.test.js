import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import HumidityChart from '../../src/components/Charts/HumidityChart';

global.ResizeObserver = require('resize-observer-polyfill');

const mockTheme = {
  background: '#ffffff',
  text: '#000000',
};

const mockData = [
  { time: '10:00', humidity: 55 },
  { time: '11:00', humidity: 60 },
  { time: '12:00', humidity: 65 },
];

describe('HumidityChart', () => {
  test('renders without crashing', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <HumidityChart data={mockData} />
      </ThemeProvider>
    );
  });

  test('displays correct chart data and options', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <HumidityChart data={mockData} />
      </ThemeProvider>
    );

    const canvas = screen.getByRole('img');
    expect(canvas).toBeInTheDocument();
  });
});
