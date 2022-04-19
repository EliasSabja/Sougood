import React from 'react';
import styles from '../../assets/styles/catalog.module.css';
import ProductCard from '../../components/catalog/productCard';

const CatalogLayout = () => {
  return (
    <div className={styles.catalogcontainer}>
	<ProductCard size="small"></ProductCard>
	<ProductCard size="small"></ProductCard>
	<ProductCard size="medium"></ProductCard>
	<ProductCard size="large"></ProductCard>
        <ProductCard size="medium"></ProductCard>
    </div>
  );
};

export default CatalogLayout;
