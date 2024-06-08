import { useState, memo } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  TimeLocationCard,
  DetailedWeatherCard,
  FiveDayForecast,
  HourlyForecast,
  ToggleSwitch,
  CurrentLocationButton,
  SearchBar,
  LoaderHome,
  ErrorModal,
  TemperatureChart,
  HumidityChart,
} from '@/components';
import {
  getWeatherByCity,
  getForecastByCity,
  getWeatherByCoords,
  getForecastByCoords,
  getUVIndex,
} from '@/lib/weather';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  padding: 16px;
  display: grid;
  grid-template-areas:
    'header header header'
    'current current current'
    'time detailed detailed'
    'forecast hourly hourly'
    'charts charts charts';
  grid-gap: 16px;

  @media (max-width: 768px) {
    grid-template-areas:
      'header header header'
      'current current current'
      'time time time'
      'detailed detailed detailed'
      'forecast forecast forecast'
      'hourly hourly hourly'
      'charts charts charts';
  }
`;

const InitialSearchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 16px;
  animation: ${fadeIn} 1s ease-in;
  @media (max-width: 768px) {
  flex-direction: column;
    gap: 16px;
    justify-content: center;
  }
`;

const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const TimeLocationContainer = styled.div`
  grid-area: time;
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 1s ease-in;
`;

const DetailedWeather = styled.div`
  grid-area: detailed;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1s ease-in;
`;

const FiveDayForecastContainer = styled.div`
  grid-area: forecast;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1s ease-in;
`;

const HourlyForecastContainer = styled.div`
  grid-area: hourly;
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 1s ease-in;
`;

const ChartsContainer = styled.div`
  grid-area: charts;
  display: flex;
  width: 100%;
  gap: 16px;
  justify-content: space-around;
  align-items: center;
  animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TemperatureChartContainer = styled.div`
  grid-area: temperatureChart;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1s ease-in;
`;

const HumidityChartContainer = styled.div`
  grid-area: humidityChart;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1s ease-in;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2em;
  animation: ${fadeIn} 1s ease-in;
`;

// Wrapping components with memo for optimization
const MemoizedToggleSwitch = memo(ToggleSwitch);
const MemoizedSearchBar = memo(SearchBar);
const MemoizedCurrentLocationButton = memo(CurrentLocationButton);
const MemoizedTimeLocationCard = memo(TimeLocationCard);
const MemoizedDetailedWeatherCard = memo(DetailedWeatherCard);
const MemoizedFiveDayForecast = memo(FiveDayForecast);
const MemoizedHourlyForecast = memo(HourlyForecast);
const MemoizedTemperatureChart = memo(TemperatureChart);
const MemoizedHumidityChart = memo(HumidityChart);

export default function Home({ themeToggler, theme }) {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [uvIndex, setUVIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [initialSearchDone, setInitialSearchDone] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      setLoading(true);
      setError('');
      try {
        const weatherData = await getWeatherByCity(city);
        if (weatherData.cod !== 200) {
          throw new Error(weatherData.message);
        }
        const forecastData = await getForecastByCity(city);
        const uvIndexData = await getUVIndex(
          weatherData.coord.lat,
          weatherData.coord.lon
        );
        setWeather(weatherData);
        setForecast(forecastData);
        setUVIndex(uvIndexData);
        setInitialSearchDone(true);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.response ? error.response.data.message : error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      setError('');
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const weatherData = await getWeatherByCoords(latitude, longitude);
          const forecastData = await getForecastByCoords(latitude, longitude);
          const uvIndexData = await getUVIndex(latitude, longitude);
          setWeather(weatherData);
          setForecast(forecastData);
          setUVIndex(uvIndexData);
          setInitialSearchDone(true);
        } catch (error) {
          console.error('Error fetching data:', error);
          setError('Error fetching current location data');
        } finally {
          setLoading(false);
        }
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const location = weather ? weather.name : 'Enter city';
  const lat = weather ? weather.coord.lat : null;
  const lon = weather ? weather.coord.lon : null;

  // Datos para los gráficos de temperatura y humedad
  const chartData = forecast
    ? forecast.list.map((item) => ({
        time: new Date(item.dt * 1000).toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
        temp: item.main.temp,
        humidity: item.main.humidity,
      }))
    : [];

  return (
    <>
      {error && <ErrorModal message={error} onClose={() => setError('')} />}
      {!initialSearchDone ? (
        <InitialSearchContainer>
          <MemoizedToggleSwitch
            toggleTheme={themeToggler}
            isDarkMode={theme === 'dark'}
            aria-label="Toggle theme"
          />
          <MemoizedSearchBar
            city={city}
            setCity={setCity}
            handleSearch={handleSearch}
            aria-label="Search city"
          />
          <MemoizedCurrentLocationButton
            onClick={handleCurrentLocation}
            aria-label="Get current location"
          />
        </InitialSearchContainer>
      ) : loading ? (
        <LoadingContainer>
          <LoaderHome aria-label="Loading" />
        </LoadingContainer>
      ) : (
        <Container>
          <Header>
            <MemoizedToggleSwitch
              toggleTheme={themeToggler}
              isDarkMode={theme === 'dark'}
              aria-label="Toggle theme"
            />
            <MemoizedSearchBar
              city={city}
              setCity={setCity}
              handleSearch={handleSearch}
              aria-label="Search city"
            />
            <MemoizedCurrentLocationButton
              onClick={handleCurrentLocation}
              aria-label="Get current location"
            />
          </Header>
          <TimeLocationContainer>
            <MemoizedTimeLocationCard location={location} lat={lat} lon={lon} />
          </TimeLocationContainer>
          <DetailedWeather>
            <MemoizedDetailedWeatherCard weather={weather} uvIndex={uvIndex} />
          </DetailedWeather>
          <FiveDayForecastContainer>
            <MemoizedFiveDayForecast forecast={forecast} />
          </FiveDayForecastContainer>
          <HourlyForecastContainer>
            <MemoizedHourlyForecast forecast={forecast} />
          </HourlyForecastContainer>
          <ChartsContainer>
            <TemperatureChartContainer>
              <MemoizedTemperatureChart data={chartData} aria-label="Temperature chart" />
            </TemperatureChartContainer>
            <HumidityChartContainer>
              <MemoizedHumidityChart data={chartData} aria-label="Humidity chart" />
            </HumidityChartContainer>
          </ChartsContainer>
        </Container>
      )}
    </>
  );
}
