import { Container } from "react-bootstrap";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container fluid className="p-0 m-0 mt-4">
        {children}
      </Container>
    </>
  );
}

export default Layout;
