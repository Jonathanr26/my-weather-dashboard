import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 90%;
  width: 400px;
  position: relative;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #4caf50;
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
  }
`;

const ErrorTitle = styled.h2`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.primary};
`;

const ErrorModal = ({ message, onClose }) => {
  return (
    <ModalBackground onClick={onClose} data-testid="modal-background">
      <ModalContent role="dialog" aria-modal="true" aria-labelledby="error-title" aria-describedby="error-message" onClick={(e) => e.stopPropagation()}>
        <ErrorTitle id="error-title">Error</ErrorTitle>
        <h1 id="error-message">{message}</h1>
        <CloseButton onClick={onClose} aria-label="Close modal">Close</CloseButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default ErrorModal;
