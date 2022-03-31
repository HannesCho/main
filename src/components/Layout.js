import { Container } from "react-bootstrap";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container fluid className="p-0 m-0">
        {children}
      </Container>
    </>
  );
}

export default Layout;
