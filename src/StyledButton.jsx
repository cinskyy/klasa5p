// StyledButton.jsx
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #4f46e5;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
  }
`;

const StyledButton = () => {
    return <Button>Kliknij mnie!</Button>;
};

export default StyledButton;
