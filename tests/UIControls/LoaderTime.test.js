import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import LoaderTime from '../../src/components/UIControls/LoaderTime';

const mockTheme = {
  background: '#ffffff',
  text: '#000000',
};

describe('LoaderTime', () => {
  test('renders without crashing', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <LoaderTime />
      </ThemeProvider>
    );

    const loader = screen.getByRole('progressbar');
    expect(loader).toBeInTheDocument();
  });

  test('has the correct basic styles', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <LoaderTime />
      </ThemeProvider>
    );

    const loader = screen.getByRole('progressbar');
    expect(loader).toHaveStyle('width: 40px');
    expect(loader).toHaveStyle('background-repeat: no-repeat');
  });
});
