import { Card } from "react-bootstrap";
import Layout from "../components/Layout";

function Sobre() {
  return (
    <Layout titulo="Sobre o Projeto">
      <Card>
        <Card.Body>
          <Card.Title>Livraria Virtual</Card.Title>
          <Card.Text>
            Este projeto é uma aplicação de catálogo de livros desenvolvida com
            Vite + React, React Router DOM e React Bootstrap.
          </Card.Text>
          <Card.Text>
            Funcionalidades: listagem de livros, página de detalhes por ID,
            sistema de favoritos e navegação entre páginas.
          </Card.Text>
          <Card.Text>
            <strong>Tecnologias:</strong> React, React Router, React Bootstrap,
            Vite.
          </Card.Text>
        </Card.Body>
      </Card>
    </Layout>
  );
}

export default Sobre;
