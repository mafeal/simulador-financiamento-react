import React from "react";
import Table from "react-bootstrap/Table";
import moedaHelper from "../../helpers/moedaHelper";


export default function TableSimulations(props) {
  const formataMoeda = (valor) => {
    const centena = valor * 100 + "";
    const moeda = moedaHelper(centena);
    return moeda;
  };

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Valor atual</th>
          <th>Num de Parcelas</th>
          <th>Parcela</th>
          <th>taxa</th>
          <th>Valor Final</th>
        </tr>
      </thead>
      <tbody>
        {props.simulacoes.map((simulacao, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{`R$ ${formataMoeda(simulacao.vAtual)}`}</td>
              <td>{simulacao.nParcelas}</td>
              <td>{`R$ ${simulacao.vParcela}`}</td>
              <td>
                {simulacao.taxa} {simulacao.periodo}
              </td>
              <td>{`R$ ${simulacao.vFuturoFormatado}`}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
