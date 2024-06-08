import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px; 
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const CurrentLocationButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} aria-label="Get Current Location">
      <Icon src="/current-location.svg" alt="Current Location Icon" />
      Current Location
    </Button>
  );
};

export default CurrentLocationButton;
