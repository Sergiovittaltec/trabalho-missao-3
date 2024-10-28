import React, { useEffect, useState } from "react";
import { ControleLivros } from "../controle/ControleLivros";
import { ControleEditora } from "../controle/ControleEditora";
import { Livro } from "../modelo/Livro";

const LivroLista: React.FC = () => {
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();

  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setLivros(controleLivro.obterLivros());
    setCarregado(true);
  }, [carregado]);

  const excluir = (codigo: number) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main className="container mt-4">
      <h2 className="mb-4">Lista de Livros</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Título</th>
            <th>Editora</th>
            <th>Resumo</th>
            <th>Autores</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr key={livro.codigo}>
              <td>{livro.titulo}</td>
              <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
              <td>{livro.resumo}</td>
              <td>
                <ul className="list-unstyled">
                  {livro.autores.map((autor, index) => (
                    <li key={index}>{autor}</li>
                  ))}
                </ul>
              </td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => excluir(livro.codigo)}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
