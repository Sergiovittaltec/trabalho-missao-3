import Head from 'next/head';
import { Menu } from '../componentes/Menu'; // Ajuste o caminho se necessário
import styles from '../styles/Home.module.css'; // Certifique-se de que este caminho está correto


export default function Home() {
  return (
    <div className="container">
            <Head>
                <title>Loja Next</title>
            </Head>
            <Menu />
            <main className={styles.main}>
                <h1 className={styles.title}>Página Inicial</h1>
            </main>
        </div>
  );
}
