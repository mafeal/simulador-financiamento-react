import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "../src/components/Button";
import Table from '../src/components/SimulationTable';

const Container = styled.div`
  width: 960px;
  font-size: 14px;
  color: #3b3a30;
  align-items: center;
  align-content: center;
`;

export default function Print() {
  const router = useRouter();
  const { simulacoesJson } = router.query;
  const simulacoes = JSON.parse(simulacoesJson);

  const handleClickImprimir = (e) => {
    e.preventDefault();

    console.log(JSON.parse(simulacoesJson));
    alert("Documento enviado para impressão.");
    window.print();
  };

  const date = new Date();

  return (
    <Container>
      <Card className="text-center">
        <Card.Header as="h2">Simulação de Financiamento</Card.Header>
        <Card.Body>
          <Table simulacoes={simulacoes} />
          <Button
            type="button"
            text="Imprimir"
            onclick={(e) => handleClickImprimir(e)}
          />
        </Card.Body>
        <Card.Footer className="text-muted">* Valores válidos somente para comparação. Não leva em consideração o IOF, pois este varia conforme o tipo de financiamento.</Card.Footer>
      </Card>
    </Container>
  );
}
