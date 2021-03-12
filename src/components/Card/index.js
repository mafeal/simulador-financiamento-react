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

export default function CardContainer(props) {
  return (
    <StyledCard>
      <StyledHeader  as="h5">
        {props.header}
      </StyledHeader>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        {props.component}
      </Card.Body>
    </StyledCard>
  );
}
