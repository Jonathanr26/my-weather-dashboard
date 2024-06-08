import React, { memo } from 'react';
import styled from 'styled-components';

const ForecastContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  color: ${({ theme }) => theme.text};
`;

const DayForecast = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const FiveDayForecast = ({ forecast }) => {
  if (!forecast) return null;

  const dailyData = forecast.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {});

  const days = Object.keys(dailyData)
    .slice(0, 5)
    .map((date) => {
      const dayData = dailyData[date];
      const avgTemp = (
        dayData.reduce((sum, item) => sum + item.main.temp, 0) / dayData.length
      ).toFixed(1);
      return {
        date,
        temp: avgTemp,
        description: dayData[0].weather[0].description,
        icon: dayData[0].weather[0].icon,
      };
    });

  return (
    <ForecastContainer>
      <h2>5 Days Forecast</h2>
      {days.map((day) => (
        <DayForecast key={day.date}>
          <span>{day.date}</span>
          <span>{day.temp}°C</span>
          <span>{day.description}</span>
          <img
            src={`https://openweathermap.org/img/wn/${day.icon}.png`}
            alt={`Weather icon showing ${day.description}`}
          />
        </DayForecast>
      ))}
    </ForecastContainer>
  );
};

export default memo(FiveDayForecast);
