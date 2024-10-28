

import { Livro } from "../modelo/Livro";

export class ControleLivros {
  private livros: Array<Livro> = [
    new Livro(1, 1, "Livro 1", "Resumo do Livro 1", ["Autor 1"]),
    new Livro(2, 2, "Livro 2", "Resumo do Livro 2", ["Autor 2"]),
    new Livro(3, 3, "Livro 3", "Resumo do Livro 3", ["Autor 3"]),
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.livros.length > 0 ? Math.max(...this.livros.map((l) => l.codigo)) + 1 : 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    this.livros = this.livros.filter((livro) => livro.codigo !== codigo);
  }
}
