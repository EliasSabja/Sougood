import '../assets/styles/styles.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Layout from '../components/layouts/layout';
import 'bootstrap/dist/css/bootstrap.css';
import {SSRProvider} from 'react-bootstrap';

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <SSRProvider>
      <Layout>
	<Component {...pageProps} />
	</Layout>
    </SSRProvider>
  );
}

export default MyApp
