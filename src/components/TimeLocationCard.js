import React, { useEffect, useState, memo } from 'react';
import styled from 'styled-components';
import moment from 'moment-timezone';
import { getTimeZone } from '../lib/timezone';
import LoaderTime from './UIControls/LoaderTime';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  color: ${({ theme }) => theme.text};
  text-align: center;
  width: 100%;
`;

const Location = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Time = styled.div`
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 8px;
`;

const DateInfo = styled.div`
  font-size: 1.2em;
`;

const TimeLocationCard = ({ location, lat, lon }) => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [timezone, setTimezone] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimeZone = async () => {
      if (lat && lon) {
        try {
          const tzData = await getTimeZone(lat, lon);
          if (tzData && tzData.zoneName) {
            setTimezone(tzData.zoneName);
          } else {
            throw new Error('Invalid timezone data');
          }
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchTimeZone();
  }, [lat, lon]);

  useEffect(() => {
    if (timezone) {
      const updateTime = () => {
        const now = moment().tz(timezone);
        setTime(now.format('HH:mm'));
        setDate(now.format('dddd, D MMMM YYYY'));
      };
      updateTime();
      const interval = setInterval(updateTime, 1000);
      return () => clearInterval(interval);
    }
  }, [timezone]);

  if (loading) {
    return (
      <Card aria-live="polite">
        <LoaderTime aria-label="Loading time and date" />
      </Card>
    );
  }

  if (error) {
    return (
      <Card aria-live="assertive">
        <div role="alert">Error fetching timezone: {error}</div>
      </Card>
    );
  }

  return (
    <Card aria-live="polite">
      <Location aria-label={`Location: ${location}`}>{location}</Location>
      <Time aria-label={`Current time: ${time}`}>{time}</Time>
      <DateInfo aria-label={`Current date: ${date}`}>{date}</DateInfo>
    </Card>
  );
};

export default memo(TimeLocationCard);
