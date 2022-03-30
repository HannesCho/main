import { Col, Container, Row, Image, Figure } from "react-bootstrap";
import styled from "styled-components";
import Fig from "../images/IMG_0009.JPG";

const Title = styled.div`
  color: ${(props) => props.theme.main};
`;

function Home() {
  return (
    <>
      <Title>Home Here</Title>
      <br />
      <Container>
        <Row>
          <Col>
            <Image src={Fig} width={171} height={180} roundedCircle />
          </Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </>
  );
}
export default Home;
