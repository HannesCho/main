import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  const navText = "py-2 mx-3 fs-3 text-dark w-10";
  return (
    <Navbar id="linked-navbar" bg="white" variant="wihte" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faHome} color="#F7AF24" className="fa-3x" />
        </Navbar.Brand>
        <Nav className="colum justify-content-end" defaultActiveKey={"#home"}>
          <Nav.Link href="#home" className={navText}>
            Home
          </Nav.Link>
          <Nav.Link href="#scrollspyHeading1" className={navText}>
            About
          </Nav.Link>
          <Nav.Link href="#scrollspyHeading2" className={navText}>
            Skills
          </Nav.Link>
          <Nav.Link href="#scrollspyHeading3" className={navText}>
            Projects
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
