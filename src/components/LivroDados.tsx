import React, { useState } from "react";
import { ControleLivros } from "../controle/ControleLivros";
import { ControleEditora } from "../controle/ControleEditora";
import { Livro } from "../modelo/Livro";

const LivroDados: React.FC = () => {
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState<number>(controleEditora.getEditoras()[0].codEditora);

  const opcoes = controleEditora.getEditoras().map((editora) => (
    <option key={editora.codEditora} value={editora.codEditora}>
      {editora.nome}
    </option>
  ));

  const incluir = (event: React.FormEvent) => {
    event.preventDefault();

    const novoLivro = new Livro(
      0, // O código será atribuído pelo método de inclusão
      codEditora,
      titulo,
      resumo,
      autores.split("\n") // Divide os autores por linha
    );

    controleLivro.incluir(novoLivro);
    // Limpa os campos do formulário
    setTitulo("");
    setResumo("");
    setAutores("");
    setCodEditora(controleEditora.getEditoras()[0].codEditora);
  };

  return (
    <main className="container mt-4">
      <h2>Cadastro de Livro</h2>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">Resumo</label>
          <textarea
            className="form-control"
            id="resumo"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="autores" className="form-label">Autores (um por linha)</label>
          <textarea
            className="form-control"
            id="autores"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="editora" className="form-label">Editora</label>
          <select
            className="form-select"
            id="editora"
            value={codEditora}
            onChange={(e) => setCodEditora(Number(e.target.value))}
            required
          >
            {opcoes}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>
    </main>
  );
};

export default LivroDados;