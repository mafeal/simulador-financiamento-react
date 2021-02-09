import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "../Form";

const StyledCard = styled(Card)`
  margin: 15px;
  border-color: #3b3a30;
  background-color: #eaece5;
`;

const StyledHeader = styled(Card.Header)`
  background-color: #3b3a30;
  color: #c5d5c5;
  padding: 10px;
`

export default function CardContainer() {
  return (
    <StyledCard>
      <StyledHeader  as="h5">
        Simulador de financiamento
      </StyledHeader>
      <Card.Body>
        <Card.Title>Insira os valores</Card.Title>
        <Card.Text>
          Entre com pelo menos 3 valores para calcular o que se deseja.
        </Card.Text>
        <Form />
      </Card.Body>
    </StyledCard>
  );
}
