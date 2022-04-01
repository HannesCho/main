import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faHome} color="white" />
        </Navbar.Brand>
        <Nav className="colum justify-content-end">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="projects">Projects</Nav.Link>
          <Nav.Link href="blogs">Blogs</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
