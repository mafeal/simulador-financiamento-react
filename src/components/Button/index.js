import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const StyledButton = styled(Button)`
  color: #3b3a30;
  font-size: 1em;
  margin: 0.5em;
  border-radius: 3px;
  background-color: #c5d5c5;
  border-color: #3b3a30;
  font-weight: bold;
  &:hover {
    color: #c5d5c5;
    background-color: #3b3a30;
    border-color: #3b3a30;
  }
`;

export default function ButtonExp() {
  return <StyledButton size="sm">Calcular</StyledButton>;
}
