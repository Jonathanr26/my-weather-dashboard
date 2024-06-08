import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import SearchBar from '../../src/components/UIControls/SearchBar';

const mockTheme = {
  background: '#ffffff',
  text: '#000000',
};

describe('SearchBar', () => {
  test('renders without crashing', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <SearchBar city="" setCity={() => {}} handleSearch={() => {}} />
      </ThemeProvider>
    );

    const input = screen.getByLabelText('Search City');
    expect(input).toBeInTheDocument();

    const button = screen.getByLabelText('Search Button');
    expect(button).toBeInTheDocument();
  });

  test('updates city value on input change', () => {
    const setCityMock = jest.fn();

    render(
      <ThemeProvider theme={mockTheme}>
        <SearchBar city="" setCity={setCityMock} handleSearch={() => {}} />
      </ThemeProvider>
    );

    const input = screen.getByLabelText('Search City');
    fireEvent.change(input, { target: { value: 'New York' } });

    expect(setCityMock).toHaveBeenCalledWith('New York');
  });

  test('calls handleSearch on button click', () => {
    const handleSearchMock = jest.fn();

    render(
      <ThemeProvider theme={mockTheme}>
        <SearchBar city="" setCity={() => {}} handleSearch={handleSearchMock} />
      </ThemeProvider>
    );

    const button = screen.getByLabelText('Search Button');
    fireEvent.click(button);

    expect(handleSearchMock).toHaveBeenCalledTimes(1);
  });

  test('calls handleSearch on Enter key press', () => {
    const handleSearchMock = jest.fn();

    render(
      <ThemeProvider theme={mockTheme}>
        <SearchBar city="" setCity={() => {}} handleSearch={handleSearchMock} />
      </ThemeProvider>
    );

    const input = screen.getByLabelText('Search City');
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(handleSearchMock).toHaveBeenCalledTimes(1);
  });
});
