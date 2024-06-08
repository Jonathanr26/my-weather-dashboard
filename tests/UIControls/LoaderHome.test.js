import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import LoaderHome from '../../src/components/UIControls/LoaderHome';

const mockTheme = {
  background: '#ffffff',
  text: '#000000',
};

describe('LoaderHome', () => {
  test('renders without crashing', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <LoaderHome />
      </ThemeProvider>
    );

    const loader = screen.getByRole('progressbar');
    expect(loader).toBeInTheDocument();
  });

  test('has the correct basic styles', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <LoaderHome />
      </ThemeProvider>
    );

    const loader = screen.getByRole('progressbar');
    expect(loader).toHaveStyle('width: 40px');
    expect(loader).toHaveStyle('height: 20px');
    expect(loader).toHaveStyle('background-size: 8px 8px');
    expect(loader).toHaveStyle('position: relative');
  });
});
