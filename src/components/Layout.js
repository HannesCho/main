import { Container } from "react-bootstrap";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}

export default Layout;
