import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimeLocationCard from '../src/components/TimeLocationCard';
import { getTimeZone } from '../src/lib/timezone';

jest.mock('../src/lib/timezone');

describe('TimeLocationCard', () => {
  const mockLocation = 'New York';
  const mockLat = 40.7143;
  const mockLon = -74.006;
  const mockTimezoneData = {
    status: "OK",
    message: "",
    countryCode: "US",
    countryName: "United States",
    regionName: "New York",
    cityName: "New York City",
    zoneName: "America/New_York",
    abbreviation: "EDT",
    gmtOffset: -14400,
    dst: "1",
    zoneStart: 1710054000,
    zoneEnd: 1730613600,
    nextAbbreviation: "EST",
    timestamp: 1717848602,
    formatted: "2024-06-08 12:10:02"
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders loader initially', async () => {
    await act(async () => {
      render(<TimeLocationCard location={mockLocation} lat={mockLat} lon={mockLon} />);
    });

  });

  test('renders location, time and date after loading', async () => {
    getTimeZone.mockResolvedValue(mockTimezoneData);

    await act(async () => {
      render(<TimeLocationCard location={mockLocation} lat={mockLat} lon={mockLon} />);
    });

    await waitFor(() => expect(getTimeZone).toHaveBeenCalledWith(mockLat, mockLon));

    await waitFor(() => {
      expect(screen.getByText(mockLocation)).toBeInTheDocument();
      expect(screen.getByText(/:\d{2}/)).toBeInTheDocument();
      expect(screen.getByText(/\w+, \d+ \w+ \d{4}/)).toBeInTheDocument();
    });
  });

  test('handles timezone fetch error gracefully', async () => {
    getTimeZone.mockRejectedValue(new Error('Error fetching timezone'));

    await act(async () => {
      render(<TimeLocationCard location={mockLocation} lat={mockLat} lon={mockLon} />);
    });

    await waitFor(() => expect(getTimeZone).toHaveBeenCalledWith(mockLat, mockLon));

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
      expect(screen.getByText(/Error fetching timezone/i)).toBeInTheDocument();
    });
  });
});
