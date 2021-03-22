import React from "react";
import Button from "../Button";
import { useRouter } from 'next/router';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import SimulationTable from "../SimulationTable";
import moedaHelper from "../../helpers/moedaHelper";
import calculaParcelas from "../../helpers/calculaParcelas";

function ShowAlert(props) {
  return (
    <Alert variant="success">
      <Alert.Heading>Calculado com sucesso!</Alert.Heading>
      <p>
        Seu financiamento ficará em:{" "}
        <strong>
          {`${props.resultado.nParcelas}`} parcelas de{" "}
          {`R$ ${props.resultado.parcela}`}
        </strong>
        .
      </p>
      <hr />
      
    </Alert>
  );
}

export default function FormCalc() {
  const [nParcelas, setNParcelas] = React.useState("");
  const [taxa, setTaxa] = React.useState("");
  const [periodo, setPeriodo] = React.useState("% ao mês");
  const [vAtual, setVAtual] = React.useState("");
  const [parcela, setParcela] = React.useState("");
  const [vFuturo, setVFuturo] = React.useState("");
  const [screenState, setScreenState] = React.useState(false);
  const [simulacoes, setSimulacoes] = React.useState([]);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    let [vParcela, valorFuturo] = calculaParcelas(
      nParcelas,
      taxa,
      periodo,
      vAtual
    );
    // console.log(`HandleSubmit = ${nParcelas} de ${parcela}`);
    setParcela(vParcela);
    setVFuturo(moedaHelper(valorFuturo));
    setScreenState(true);

    let vFuturoFormatado = moedaHelper(valorFuturo)
    
    addSimulacao({
      vAtual,
      taxa,
      periodo,
      nParcelas,
      vParcela,
      vFuturoFormatado,
    });
  };

  const resultado = {
    parcela,
    nParcelas,
  };

  function addSimulacao(simulacao) {
    setSimulacoes([...simulacoes, simulacao]);
  }

  const handleClickNovaSimulacao = (e) => {
    e.preventDefault();

    setScreenState(false);
    setParcela("");
    setVFuturo("");
    setNParcelas("");
    setTaxa("");
    setVAtual("");

    console.log(simulacoes);
  };

  const handleClickImprimeSimulacao = (e) => {
    e.preventDefault();
    const simulacoesStringfied = JSON.stringify(simulacoes)
    router.push(`/printLayout?simulacoesJson=${simulacoesStringfied}`);
  }


  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridParcelas">
            <Form.Label>Número de Parcelas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Só números"
              onChange={(e) => setNParcelas(e.target.value)}
              value={nParcelas}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTaxa">
            <Form.Label>Taxa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Em %"
              onChange={(e) => setTaxa(e.target.value)}
              value={taxa}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPeriodo">
            <Form.Label>Período</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Escolha..."
              onChange={(e) => setPeriodo(e.target.value)}
            >
              <option>% ao mês</option>
              <option>% ao ano</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridVPresente">
            <Form.Label>
              Valor Financiado
              <br />
              (somente valores inteiros)
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="R$ 0,00"
              onChange={(e) => setVAtual(e.target.value)}
              value={vAtual}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridVFuturo">
            <Form.Label>
              Valor Final
              <br /> (somente leitura)
            </Form.Label>
            <Form.Control placeholder="R$ 0,00" readOnly value={vFuturo} />
          </Form.Group>
        </Form.Row>

        {screenState && <ShowAlert resultado={resultado} />}

        {/* <pre>{nParcelas}</pre> */}

        <Button type="submit" text="Calcular" />
        <Button
          type="button"
          text="Nova simulação"
          onclick={(e) => handleClickNovaSimulacao(e)}
        />
        <Button
          type="button"
          text="Imprimir a simulação"
          onclick={(e) => handleClickImprimeSimulacao(e)}
        />
      </Form>
      <SimulationTable simulacoes={simulacoes} />
    </>
  );
}
