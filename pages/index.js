import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBackground from "../src/components/AppBackground";
import Navbar from "../src/components/Navbar";
import Card from "../src/components/Card";

const Container = styled.div`
  width: 480px;
  font-size: 14px;
  color: #3b3a30;
`;

export default function Home() {
  return (
    <AppBackground>
      <Container>
        <Navbar />
        <Card />
      </Container>
    </AppBackground>
  );
}
