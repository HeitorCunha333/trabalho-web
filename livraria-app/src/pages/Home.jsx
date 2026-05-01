import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ListaLivros from "../components/ListaLivros";
import livrosData from "../data/livros";

function Home({ favoritos, onToggleFavorito }) {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    // Simula carregamento de dados
    setLivros(livrosData);
  }, []);

  return (
    <Layout titulo="📚 Catálogo de Livros">
      <ListaLivros livros={livros} favoritos={favoritos} onToggleFavorito={onToggleFavorito} />
    </Layout>
  );
}

export default Home;