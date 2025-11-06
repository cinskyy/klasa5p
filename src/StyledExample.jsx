// StyledExample.jsx
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  color: #4f46e5;
  text-align: center;
`;

const StyledExample = () => {
    return <StyledHeader>Witaj w styled-components!</StyledHeader>;
};

export default StyledExample;
