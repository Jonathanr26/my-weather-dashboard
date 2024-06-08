import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #45a049;
  }
`;

const SearchBar = ({ city, setCity, handleSearch }) => {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
        tabIndex="0"
        aria-label="Search City"
      />
      <Button onClick={handleSearch} tabIndex="0" aria-label="Search Button">Search</Button>
    </Container>
  );
};

export default SearchBar;
