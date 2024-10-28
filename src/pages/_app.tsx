// src/pages/_app.tsx
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'; // Ajuste o caminho se necessário
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
