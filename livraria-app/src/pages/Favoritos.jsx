import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ListaLivros from "../components/ListaLivros";
import livrosData from "../data/livros";

function Favoritos({ favoritos, onToggleFavorito }) {
  const [livrosFavoritos, setLivrosFavoritos] = useState([]);

  useEffect(() => {
    const filtrados = livrosData.filter((l) => favoritos.includes(l.id));
    setLivrosFavoritos(filtrados);
  }, [favoritos]);

  return (
    <Layout titulo="★ Meus Favoritos">
      {livrosFavoritos.length === 0 ? (
        <p>Você ainda não favoritou nenhum livro.</p>
      ) : (
        <ListaLivros livros={livrosFavoritos} favoritos={favoritos} onToggleFavorito={onToggleFavorito} />
      )}
    </Layout>
  );
}

export default Favoritos;