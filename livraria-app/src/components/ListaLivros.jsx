import { Row, Col } from "react-bootstrap";
import LivroCard from "./LivroCard";

function ListaLivros({ livros, favoritos, onToggleFavorito }) {
  return (
    <Row xs={1} sm={2} md={3} className="g-4">
      {livros.map((livro) => (
        <Col key={livro.id}>
          <LivroCard
            livro={livro}
            isFavorito={favoritos.includes(livro.id)}
            onToggleFavorito={onToggleFavorito}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ListaLivros;