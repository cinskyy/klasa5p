// AlertBox.jsx
import React from 'react';
import styled from 'styled-components';

const AlertBox = styled.div`
  background-color: ${(props) => (props.type === 'success' ? 'green' : props.type === 'error' ? 'red' : 'blue')};
  color: white;
  padding: 15px;
  border-radius: 5px;
  font-weight: bold;
`;

const AlertBoxComponent = ({ type, children }) => {
    return <AlertBox type={type}>{children}</AlertBox>;
};

export default AlertBoxComponent;
