import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.background};
  transition: 0.4s;
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.text};
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + ${Slider} {
    background-color: ${({ theme }) => theme.text};
  }

  &:checked + ${Slider}:before {
    transform: translateX(26px);
    background-color: ${({ theme }) => theme.background};
  }
`;

const ModeLabel = styled.span`
  margin-left: 8px;
  font-size: 1em;
  color: ${({ theme }) => theme.text};
`;

const ToggleSwitch = ({ toggleTheme, isDarkMode }) => {
  return (
    <Container>
      <Switch>
        <Input 
          type="checkbox" 
          onChange={toggleTheme} 
          checked={isDarkMode} 
          tabIndex="0" 
          aria-checked={isDarkMode}
          aria-label="Toggle Theme"
        />
        <Slider />
      </Switch>
      <ModeLabel>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</ModeLabel>
    </Container>
  );
};

export default ToggleSwitch;
