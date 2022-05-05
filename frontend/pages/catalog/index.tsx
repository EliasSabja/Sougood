import React, { useState, useEffect } from 'react';
import styles from '../../assets/styles/catalog.module.css';
import ProductCard from '../../components/catalog/productCard';
import ProductDetails from '../../components/catalog/productDetails';

const tags1 = [
  "Oferta",
  "Nuevo",
];

const tags2 = [
  "Oferta",
  "Pocas unidades",
];

const CatalogLayout = () => {
  const [isShowingDetails, setIsShowingDetails] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(-1);

  const showDetails = (productId) => {
    setIsShowingDetails(currIsShowingDetails => !currIsShowingDetails);
    setSelectedProductId(productId);
  }

  const closeShowDetails = () => {
    setIsShowingDetails(currIsShowingDetails => !currIsShowingDetails);
    setSelectedProductId(-1);
  }

  return (
    <div className={styles.catalogcontainer}>
      <ProductCard size="small" src="image1.jpeg" tags={tags1} productId={1} showDetails={showDetails}></ProductCard>
      <ProductCard size="small" src="image2.jpeg" tags={tags2} productId={2} showDetails={showDetails}></ProductCard>
      <ProductCard size="medium" src="image3.jpeg" tags={tags2} productId={3} showDetails={showDetails}></ProductCard>
      <ProductCard size="large" src="image4.jpeg" tags={tags1} productId={4} showDetails={showDetails}></ProductCard>
      <ProductCard size="medium" src="image5.jpeg" tags={tags1} productId={5} showDetails={showDetails}></ProductCard>
      <ProductCard size="large" src="image6.jpeg" tags={tags2} productId={6} showDetails={showDetails}></ProductCard>
      <ProductCard size="large" src="image7.jpeg" tags={tags1} productId={7} showDetails={showDetails}></ProductCard>
      <ProductCard size="medium" src="image8.jpeg" tags={tags1} productId={8} showDetails={showDetails}></ProductCard>
      <ProductCard size="small" src="image9.jpeg" tags={tags1} productId={9} showDetails={showDetails}></ProductCard>
      <ProductCard size="medium" src="image10.jpeg" tags={tags2} productId={10} showDetails={showDetails}></ProductCard>
      <ProductCard size="large" src="image11.jpeg" tags={tags2} productId={11} showDetails={showDetails}></ProductCard>	
      <ProductCard size="small" src="image12.jpeg" tags={tags1} productId={12} showDetails={showDetails}></ProductCard>
      <ProductCard size="large" src="image13.jpeg" tags={tags2} productId={13} showDetails={showDetails}></ProductCard>
      <ProductCard size="medium" src="image14.jpeg" tags={tags2} productId={14} showDetails={showDetails}></ProductCard>
      {isShowingDetails && 
        <ProductDetails handleClose={closeShowDetails} productId={selectedProductId} />
      }
	
    </div>
  );
};

export default CatalogLayout;
