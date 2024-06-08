import React, { memo } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  background: ${({ theme }) => theme.background};
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  color: ${({ theme }) => theme.text};
`;

const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Temperature = styled.div`
  font-size: 3em;
  font-weight: bold;
`;

const FeelsLike = styled.div`
  font-size: 1.2em;
  margin-top: 5px;
  color: ${({ theme }) => theme.secondaryText};
`;

const WeatherIcon = styled.img`
  width: 80px;
  height: 80px;
`;

const WeatherDescription = styled.div`
  font-size: 1.8em;
  text-align: center;
  font-weight: bold;
  margin: 20px 0;
`;

const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
`;

const InfoBlock = styled.div`
  text-align: center;
  flex: 1;
`;

const InfoBlockTitle = styled.div`
  font-size: 1em;
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 5px;
`;

const InfoBlockValue = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;

const DetailedWeatherCard = ({ weather, uvIndex }) => {
  if (!weather) return null;

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  return (
    <Card>
      <MainInfo>
        <div>
          <Temperature>{weather.main.temp}°C</Temperature>
          <FeelsLike>Feels like: {weather.main.feels_like}°C</FeelsLike>
        </div>
        <WeatherIcon
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={`Weather icon showing ${weather.weather[0].description}`}
        />
      </MainInfo>
      <WeatherDescription>{weather.weather[0].description}</WeatherDescription>
      <AdditionalInfo>
        <InfoBlock>
          <InfoBlockTitle>Sunrise</InfoBlockTitle>
          <InfoBlockValue>{formatTime(weather.sys.sunrise)}</InfoBlockValue>
        </InfoBlock>
        <InfoBlock>
          <InfoBlockTitle>Sunset</InfoBlockTitle>
          <InfoBlockValue>{formatTime(weather.sys.sunset)}</InfoBlockValue>
        </InfoBlock>
        <InfoBlock>
          <InfoBlockTitle>Humidity</InfoBlockTitle>
          <InfoBlockValue>{weather.main.humidity}%</InfoBlockValue>
        </InfoBlock>
        <InfoBlock>
          <InfoBlockTitle>Wind Speed</InfoBlockTitle>
          <InfoBlockValue>{weather.wind.speed} km/h</InfoBlockValue>
        </InfoBlock>
        <InfoBlock>
          <InfoBlockTitle>Pressure</InfoBlockTitle>
          <InfoBlockValue>{weather.main.pressure} hPa</InfoBlockValue>
        </InfoBlock>
        <InfoBlock>
          <InfoBlockTitle>UV Index</InfoBlockTitle>
          <InfoBlockValue>{uvIndex}</InfoBlockValue>
        </InfoBlock>
      </AdditionalInfo>
    </Card>
  );
};

export default memo(DetailedWeatherCard);
