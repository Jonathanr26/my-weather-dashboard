import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import ToggleSwitch from '../../src/components/UIControls/ToggleSwitch';

const mockTheme = {
  background: '#ffffff',
  text: '#000000',
};

describe('ToggleSwitch', () => {
  test('renders without crashing', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <ToggleSwitch toggleTheme={() => {}} isDarkMode={false} />
      </ThemeProvider>
    );

    const toggleSwitch = screen.getByLabelText('Toggle Theme');
    expect(toggleSwitch).toBeInTheDocument();
  });

  test('initially shows Light Mode', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <ToggleSwitch toggleTheme={() => {}} isDarkMode={false} />
      </ThemeProvider>
    );

    const modeLabel = screen.getByText('Light Mode');
    expect(modeLabel).toBeInTheDocument();
  });

  test('initially shows Dark Mode', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <ToggleSwitch toggleTheme={() => {}} isDarkMode={true} />
      </ThemeProvider>
    );

    const modeLabel = screen.getByText('Dark Mode');
    expect(modeLabel).toBeInTheDocument();
  });

  test('toggles the switch and updates the label', () => {
    const toggleThemeMock = jest.fn();

    render(
      <ThemeProvider theme={mockTheme}>
        <ToggleSwitch toggleTheme={toggleThemeMock} isDarkMode={false} />
      </ThemeProvider>
    );

    const toggleSwitch = screen.getByLabelText('Toggle Theme');
    fireEvent.click(toggleSwitch);

    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });

  test('label updates correctly when toggled', () => {
    const toggleThemeMock = jest.fn();

    const { rerender } = render(
      <ThemeProvider theme={mockTheme}>
        <ToggleSwitch toggleTheme={toggleThemeMock} isDarkMode={false} />
      </ThemeProvider>
    );

    const toggleSwitch = screen.getByLabelText('Toggle Theme');
    fireEvent.click(toggleSwitch);
    expect(toggleThemeMock).toHaveBeenCalledTimes(1);

    rerender(
      <ThemeProvider theme={mockTheme}>
        <ToggleSwitch toggleTheme={toggleThemeMock} isDarkMode={true} />
      </ThemeProvider>
    );

    const modeLabel = screen.getByText('Dark Mode');
    expect(modeLabel).toBeInTheDocument();
  });
});
