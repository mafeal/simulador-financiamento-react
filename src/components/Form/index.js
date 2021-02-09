import React from "react";
import Button from "../Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import moedaHelper from "../../helpers/moedaHelper";
import calculaParcelas from "../../helpers/calculaParcelas";

export default function FormCalc() {
  const [nParcelas, setNParcelas] = React.useState("");
  const [taxa, setTaxa] = React.useState("");
  const [periodo, setPeriodo] = React.useState("% ao mês");
  const [vAtual, setVAtual] = React.useState("");
  const [parcela, setParcela] = React.useState("");
  const [vFuturo, setVFuturo] = React.useState("");

  const handleClick = () => {
    // const [vParcela, valorFuturo] = calculaParcelas(
    //   nParcelas,
    //   taxa,
    //   periodo,
    //   vAtual
    // );

    // console.log("click");
    // setParcela(vParcela);
    // setVFuturo(valorFuturo);
    alert('Clicou!')
  }

  return (
    <Form
      on={() => alert('Clicou!')}
    >
      <Form.Row>
        <Form.Group as={Col} controlId="formGridParcelas">
          <Form.Label>Número de Parcelas</Form.Label>
          <Form.Control
            type="number"
            placeholder="Só números"
            onChange={(e) => setNParcelas(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTaxa">
          <Form.Label>Taxa</Form.Label>
          <Form.Control
            type="text"
            placeholder="Em %"
            onChange={(e) => setTaxa(e.target.value)}
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
            onBlur={(e) => {
              const centena = vAtual * 100 + "";
              const moeda = moedaHelper(centena);
              return (e.target.value = moeda);
            }}
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

      <Alert variant="success">
        <Alert.Heading>Calculado com sucesso!</Alert.Heading>
        <p>
          Seu financiamento ficará em:{" "}
          <strong>24 parcelas de {`R$ ${parcela}`}</strong>.
        </p>
        <hr />
        <p className="mb-0">
          <strong>Atenção: </strong>Esse cálculo não leva em consideração o IOF,
          pois esse pode variar conforme o tipo de operação.
        </p>
      </Alert>

      <pre>{(parcela, vFuturo)}</pre>

      <Button type="submit" onClick={() => alert('Clicou!')}>Calcular</Button>
    </Form>
  );
}
