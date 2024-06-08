import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend, Filler } from 'chart.js';

const Container = styled.div`
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

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend, Filler);

const TemperatureChart = ({ data }) => {
  const theme = useTheme(); 

  const chartData = {
    labels: data.map(entry => entry.time),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map(entry => entry.temp),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
          color: theme.text, 
        },
        ticks: {
          color: theme.text, 
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
          color: theme.text, 
        },
        ticks: {
          color: theme.text, 
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: theme.text, 
        },
      },
      tooltip: {
        titleColor: theme.text, 
        bodyColor: theme.text, 
        backgroundColor: theme.background, 
      },
    },
  };

  return (
    <Container>
      <Line data={chartData} options={options} aria-label="Temperature Chart" role="img" />
    </Container>
  );
};

export default TemperatureChart;
