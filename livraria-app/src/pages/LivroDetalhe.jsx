import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Badge, Button, ListGroup } from "react-bootstrap";
import Layout from "../components/Layout";
import BotaoVoltar from "../components/BotaoVoltar";
import livrosData from "../data/livros";

function LivroDetalhe({ favoritos, onToggleFavorito }) {
  const { id } = useParams();
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    const encontrado = livrosData.find((l) => l.id === Number(id));
    setLivro(encontrado);
  }, [id]);

  if (!livro) return <Layout><p>Livro não encontrado.</p></Layout>;

  const ehFavorito = favoritos.includes(livro.id);

  return (
    <Layout>
      <BotaoVoltar />
      <h2>{livro.titulo}</h2>
      <Badge bg="secondary" className="mb-3">{livro.genero}</Badge>
      <ListGroup className="mb-3">
        <ListGroup.Item><strong>Autor:</strong> {livro.autor}</ListGroup.Item>
        <ListGroup.Item><strong>Ano:</strong> {livro.ano}</ListGroup.Item>
        <ListGroup.Item><strong>Páginas:</strong> {livro.paginas}</ListGroup.Item>
      </ListGroup>
      <p>{livro.descricao}</p>
      <Button
        variant={ehFavorito ? "warning" : "outline-warning"}
        onClick={() => onToggleFavorito(livro.id)}
      >
        {ehFavorito ? "★ Remover dos favoritos" : "☆ Adicionar aos favoritos"}
      </Button>
    </Layout>
  );
}

export default LivroDetalhe;