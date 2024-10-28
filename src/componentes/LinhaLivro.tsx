import React from 'react';
import ControleEditora, { editoras } from '../classes/controle/ControleEditora';
import  Livro  from '../classes/modelo/Livro';

const controleEditora = new ControleEditora(editoras); // Instância usada para diminuir as chamadas assíncronas

interface LinhaLivroProps {
    livro: Livro; // O livro que será exibido
    excluir: () => void; // Função de exclusão para o livro
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    const { livro, excluir } = props;
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora); // Obtém o nome da editora

    return (
        <tr>
            <td>{livro.codigo}</td>
            <td>{livro.titulo}</td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
            <td>
                <button className="btn btn-danger" onClick={excluir}>Excluir</button>
            </td>
        </tr>
    );
};

export default LinhaLivro;