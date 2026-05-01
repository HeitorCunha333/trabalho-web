import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function LivroCard({ livro, isFavorito, onToggleFavorito }) {
  return (
    <Card className="h-100">
      <Card.Body>
        <Badge bg="secondary" className="mb-2">{livro.genero}</Badge>
        <Card.Title>{livro.titulo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{livro.autor} · {livro.ano}</Card.Subtitle>
        <Card.Text>{livro.descricao.substring(0, 80)}...</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex gap-2">
        <Button as={Link} to={`/detalhe/${livro.id}`} variant="primary" size="sm">
          Ver detalhes
        </Button>
        <Button
          variant={isFavorito ? "warning" : "outline-warning"}
          size="sm"
          onClick={() => onToggleFavorito(livro.id)}
        >
          {isFavorito ? "★ Favoritado" : "☆ Favoritar"}
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default LivroCard;