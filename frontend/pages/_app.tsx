import '../assets/styles/styles.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Layout from '../components/layouts/layout';
import 'bootstrap/dist/css/bootstrap.css';
import { SSRProvider } from 'react-bootstrap';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp
