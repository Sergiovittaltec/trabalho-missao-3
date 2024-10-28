import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Menu } from '../componentes/Menu'; 
import styles from '../styles/Home.module.css'; 
import ControleEditora, { editoras } from '../classes/controle/ControleEditora'; 
import Livro from '../classes/modelo/Livro'; 
import { useRouter } from 'next/router'; 


const LivroDados: React.FC = () => {

    const controleEditora = new ControleEditora(editoras); 
    const baseURL = "http://localhost:3000/api/livros";

    const [opcoes, setOpcoes] = useState<{ value: number; text: String }[]>([]); 
    const [titulo, setTitulo] = useState<string>(''); 
    const [resumo, setResumo] = useState<string>(''); 
    const [autores, setAutores] = useState<string>(''); 
    const [codEditora, setCodEditora] = useState<number>(0); 
    const router = useRouter(); 

    
    const incluirLivro = async (livro: Livro) => {
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(livro),
        });
        return response.ok; 
    };

    
    useEffect(() => {
        const carregarEditoras = async () => {
            const editoras = await controleEditora.getEditoras();
            setOpcoes(editoras.map(({ codEditora, nome }) => ({ value: codEditora, text: nome }))); 
            if (editoras.length > 0) {
                setCodEditora(editoras[0].codEditora); 
            }
        };

        carregarEditoras();
    }, []);

    
    const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(evento.target.value)); 
    };

 
    const incluir = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault(); 
        const livro: Livro = {
            codigo: 0, 
            titulo,
            resumo,
            autores: autores.split('\n'), 
            codEditora,
        };

        const sucesso = await incluirLivro(livro);
        if (sucesso) {
            router.push('/LivroLista'); 
        }
    };


    return (
        <div className="container">
            <Head>
                <title>Adicionar Livro</title>
            </Head>
            <Menu />
            <main className={styles.main}>
                <h1 className={styles.title}>Incluir Livro</h1>
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
                        <label htmlFor="autores" className="form-label">Autores (separados por linha)</label>
                        <textarea
                            className="form-control"
                            id="autores"
                            value={autores}
                            onChange={(e) => setAutores(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="codEditora" className="form-label">Editora</label>
                        <select
                            id="codEditora"
                            className="form-select"
                            value={codEditora}
                            onChange={tratarCombo}
                            required
                        >
                            {opcoes.map(opcao => (
                                <option key={opcao.value} value={opcao.value}>
                                    {opcao.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Incluir Livro</button>
                </form>
            </main>
        </div>
    );
};

export default LivroDados; 