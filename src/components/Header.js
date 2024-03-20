import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  const navText = "py-2 mx-3 h5 text-dark w-10";
  return (
    <Navbar
      id="linked-navbar"
      bg="white"
      variant="wihte"
      fixed="top"
      className="border-bottom border-dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faHome} color="#F7AF24" className="fa-2x" />
        </Navbar.Brand>
        <Nav className="colum justify-content-end" defaultActiveKey={"#home"}>
          <Nav.Link href="#home" className={navText}>
            Home
          </Nav.Link>
          <Nav.Link href="#aboutme" className={navText}>
            About
          </Nav.Link>
          <Nav.Link href="#skills" className={navText}>
            Skills
          </Nav.Link>
          <Nav.Link href="#projects" className={navText}>
            Projects
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
