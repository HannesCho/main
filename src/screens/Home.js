import { Col, Container, Row, Image } from "react-bootstrap";
import Fig from "../images/IMG_0009.JPG";

function Home() {
  return (
    <Container className="mt-4">
      <Row fluid="md">
        <Col>
          <Image src={Fig} width={171} height={180} roundedCircle />
        </Col>
        <Col className="bg-primary border mt-1 bg-opacity-50">2 of 2</Col>
      </Row>
    </Container>
  );
}
export default Home;
