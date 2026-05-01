import { Container } from "react-bootstrap";

function Layout({ titulo, children }) {
  return (
    <Container className="my-4">
      {titulo && <h2 className="mb-4">{titulo}</h2>}
      {children}
    </Container>
  );
}

export default Layout;