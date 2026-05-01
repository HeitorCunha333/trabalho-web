import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import LivroDetalhe from "./pages/LivroDetalhe";
import Favoritos from "./pages/Favoritos";
import Sobre from "./pages/Sobre";

function App() {
  const [favoritos, setFavoritos] = useState([]);

  function toggleFavorito(id) {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }

  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home favoritos={favoritos} onToggleFavorito={toggleFavorito} />} />
        <Route path="/detalhe/:id" element={<LivroDetalhe favoritos={favoritos} onToggleFavorito={toggleFavorito} />} />
        <Route path="/extra" element={<Favoritos favoritos={favoritos} onToggleFavorito={toggleFavorito} />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;