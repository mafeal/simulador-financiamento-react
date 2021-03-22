import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBackground from "../src/components/AppBackground";
import Navbar from "../src/components/Navbar";
import Card from "../src/components/Card";
import Form from "../src/components/Form";

const Container = styled.div`
  width: 960px;
  font-size: 14px;
  color: #3b3a30;
  align-items: center;
  align-content: center;
`;

export default function Home() {
  return (
    <AppBackground>
      <Container>
        <Navbar />
        <Card
          component={<Form />}
          header={"Simulador de Financiamento"}
          title={"Faça suas simulações e as compare logo abaixo"}
          text={
            <>
              <strong>Atenção: </strong>Esse cálculo não leva em consideração o
              IOF, pois esse pode variar conforme o tipo de operação.
            </>
          }
        />
      </Container>
    </AppBackground>
  );
}
