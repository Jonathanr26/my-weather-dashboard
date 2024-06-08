import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import ErrorModal from '../../src/components/modals/ErrorModal';

const mockTheme = {
  background: '#ffffff',
  text: '#000000',
  primary: '#ff0000',
};

describe('ErrorModal', () => {
  test('renders without crashing', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <ErrorModal message="An error occurred" onClose={() => {}} />
      </ThemeProvider>
    );

    const modalTitle = screen.getByText('Error');
    expect(modalTitle).toBeInTheDocument();

    const modalMessage = screen.getByText('An error occurred');
    expect(modalMessage).toBeInTheDocument();
  });

  test('has the correct basic styles', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <ErrorModal message="An error occurred" onClose={() => {}} />
      </ThemeProvider>
    );

    const modalBackground = screen.getByTestId('modal-background');
    expect(modalBackground).toHaveStyle('position: fixed');
    expect(modalBackground).toHaveStyle('top: 0');
    expect(modalBackground).toHaveStyle('left: 0');
    expect(modalBackground).toHaveStyle('width: 100%');
    expect(modalBackground).toHaveStyle('height: 100%');
    expect(modalBackground).toHaveStyle('background: rgba(0, 0, 0, 0.5)');
    expect(modalBackground).toHaveStyle('display: flex');
    expect(modalBackground).toHaveStyle('justify-content: center');
    expect(modalBackground).toHaveStyle('align-items: center');
    expect(modalBackground).toHaveStyle('z-index: 1000');

    const modalContent = screen.getByRole('dialog');
    expect(modalContent).toHaveStyle(`background: ${mockTheme.background}`);
    expect(modalContent).toHaveStyle(`color: ${mockTheme.text}`);
    expect(modalContent).toHaveStyle('padding: 20px');
    expect(modalContent).toHaveStyle('border-radius: 8px');
    expect(modalContent).toHaveStyle('box-shadow: 0 4px 8px rgba(0,0,0,0.1)');
    expect(modalContent).toHaveStyle('text-align: center');
    expect(modalContent).toHaveStyle('max-width: 90%');
    expect(modalContent).toHaveStyle('width: 400px');
  });

  test('calls onClose when background or close button is clicked', () => {
    const handleClose = jest.fn();
    render(
      <ThemeProvider theme={mockTheme}>
        <ErrorModal message="An error occurred" onClose={handleClose} />
      </ThemeProvider>
    );

    const modalBackground = screen.getByTestId('modal-background');
    fireEvent.click(modalBackground);
    expect(handleClose).toHaveBeenCalledTimes(1);

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(2);
  });
});