import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import CurrentLocationButton from '../../src/components/UIControls/CurrentLocationButton';

describe('CurrentLocationButton', () => {
  test('renders without crashing', () => {
    render(
      <CurrentLocationButton onClick={() => {}} />
    );

    const button = screen.getByRole('button', { name: /get current location/i });
    expect(button).toBeInTheDocument();
  });

  test('has the correct basic styles', () => {
    render(
      <CurrentLocationButton onClick={() => {}} />
    );

    const button = screen.getByRole('button', { name: /get current location/i });

    // Forzar el estado normal sin hover
    fireEvent.mouseOut(button);

    expect(button).toHaveStyle('padding: 8px 16px');
    expect(button).toHaveStyle('font-size: 16px');
    expect(button).toHaveStyle('border-radius: 25px');
    expect(button).toHaveStyle('cursor: pointer');
    expect(button).toHaveStyle('color: white');
    expect(button).toHaveStyle('display: flex');
    expect(button).toHaveStyle('align-items: center');
    expect(button).toHaveStyle('gap: 8px');

    const icon = screen.getByAltText('Current Location Icon');
    expect(icon).toHaveStyle('width: 24px');
    expect(icon).toHaveStyle('height: 24px');
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(
      <CurrentLocationButton onClick={handleClick} />
    );

    const button = screen.getByRole('button', { name: /get current location/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
