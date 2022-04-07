import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar id="linked-navbar" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/main">
          <FontAwesomeIcon icon={faHome} color="white" />
        </Navbar.Brand>
        <Nav className="colum justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#scrollspyHeading1">About</Nav.Link>
          <Nav.Link href="#scrollspyHeading2">Skills</Nav.Link>
          <Nav.Link href="#scrollspyHeading3">Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
