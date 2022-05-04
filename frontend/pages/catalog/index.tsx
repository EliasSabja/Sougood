import React from 'react';
import styles from '../../assets/styles/catalog.module.css';
import ProductCard from '../../components/catalog/productCard';

const CatalogLayout = () => {
  return (
    <div className={styles.catalogcontainer}>
      <ProductCard size="small" src="image1.jpeg"></ProductCard>
      <ProductCard size="small" src="image2.jpeg"></ProductCard>
      <ProductCard size="medium" src="image3.jpeg"></ProductCard>
      <ProductCard size="large" src="image4.jpeg"></ProductCard>
      <ProductCard size="medium" src="image5.jpeg"></ProductCard>
      <ProductCard size="large" src="image6.jpeg"></ProductCard>
      <ProductCard size="large" src="image7.jpeg"></ProductCard>
      <ProductCard size="medium" src="image8.jpeg"></ProductCard>
      <ProductCard size="small" src="image9.jpeg"></ProductCard>
      <ProductCard size="medium" src="image10.jpeg"></ProductCard>
	<ProductCard size="large" src="image11.jpeg"></ProductCard>	
	  <ProductCard size="small" src="image12.jpeg"></ProductCard>
	    <ProductCard size="large" src="image13.jpeg"></ProductCard>
	      <ProductCard size="medium" src="image14.jpeg"></ProductCard>
    </div>
  );
};

export default CatalogLayout;
