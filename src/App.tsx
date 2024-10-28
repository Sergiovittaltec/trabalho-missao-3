// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LivroLista from "./components/LivroLista";
import LivroDados from "./components/LivroDados";

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Biblioteca</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Listar Livros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cadastrar">Cadastrar Livro</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/cadastrar" element={<LivroDados />} />
      </Routes>
    </Router>
  );
};

export default App;
