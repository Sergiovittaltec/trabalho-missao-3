

import { Livro } from "../modelo/Livro";

export class ControleEditora {
  private editoras: Array<{ codEditora: number; nome: string }> = [
    { codEditora: 1, nome: "Editora A" },
    { codEditora: 2, nome: "Editora B" },
    { codEditora: 3, nome: "Editora C" },
  ];

  getEditoras() {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.find((editora) => editora.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }
}
