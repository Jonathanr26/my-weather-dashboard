import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';

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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler);

const HumidityChart = ({ data }) => {
  const theme = useTheme(); 

  const chartData = {
    labels: data.map(entry => entry.time),
    datasets: [
      {
        label: 'Humidity (%)',
        data: data.map(entry => entry.humidity),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
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
          text: 'Humidity (%)',
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
      <Bar data={chartData} options={options} aria-label="Humidity Chart" role="img" />
    </Container>
  );
};

export default HumidityChart;
