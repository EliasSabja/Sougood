import '../assets/styles/styles.css';
import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import Layout from '../components/layouts/layout';
import 'bootstrap/dist/css/bootstrap.css';
import { SSRProvider } from 'react-bootstrap';
import Head from 'next/head';
import ICartItem from '../types/cart';
import Cart from '../components/cart/cart';
import { Drawer } from '@mui/material';
import { CartProvider } from '../contexts/cartContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const getTotalItems = (items: ICartItem[]) => items.reduce((acc: number, item) => acc + item.amount, 0);

  return (
    <SSRProvider>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <CartProvider>
        <Layout openCart={() => setIsCartOpen(true)}>
          <Drawer anchor="right" open={isCartOpen} onClose={() => setIsCartOpen(false)}>
            <Cart />
          </Drawer>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </SSRProvider>
  );
}

export default MyApp
