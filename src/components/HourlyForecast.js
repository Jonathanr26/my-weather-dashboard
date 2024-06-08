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

const HourlyContainer = styled.div`
  display: flex;
  height: 60%;
  justify-content: space-between;
  gap: 10px;
`;

const HourCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  height: 100%;
  border-radius: 8px;
  background: ${({ $bg }) => $bg || '#fff'};
  color: #fff;
  flex: 1;
  text-align: center;
`;

const Time = styled.div`
  font-size: 1.2em;
  margin-bottom: 5px;
`;

const Temp = styled.div`
  font-size: 1.2em;
  margin-top: 5px;
`;

const Wind = styled.div`
  font-size: 0.9em;
  margin-top: 5px;
`;

const ImgCard = styled.img`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const getBackgroundColor = (index) => {
  if (index < 2) return '#FFB84D';
  if (index < 4) return '#FFA07A';
  return '#8A2BE2';
};

const HourlyForecast = ({ forecast }) => {
  if (!forecast) return null;

  // Mapear los datos de las próximas 6 horas
  const hourlyData = forecast.list.slice(0, 6).map((item, index) => {
    const time = new Date(item.dt * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const temp = item.main.temp.toFixed(1);
    const windSpeed = item.wind.speed;
    const icon = item.weather[0].icon;
    const description = item.weather[0].description;
    const bgColor = getBackgroundColor(index);

    return { time, temp, windSpeed, icon, description, bgColor };
  });

  return (
    <ForecastContainer>
      <h2>Hourly Forecast</h2>
      <HourlyContainer>
        {hourlyData.map((hour, index) => (
          <HourCard key={index} $bg={hour.bgColor}>
            <Time>{hour.time}</Time>
            <ImgCard
              src={`http://openweathermap.org/img/wn/${hour.icon}.png`}
              alt={`Weather icon: ${hour.description}`}
            />
            <Temp>{hour.temp}°C</Temp>
            <Wind>{hour.windSpeed} km/h</Wind>
          </HourCard>
        ))}
      </HourlyContainer>
    </ForecastContainer>
  );
};

export default memo(HourlyForecast);
