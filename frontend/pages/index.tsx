import React, { useState, useEffect } from 'react';
import styles from '../assets/styles/catalog.module.css';
import ProductCard from '../components/catalog/productCard';
import ProductDetails from '../components/catalog/productDetails';

const tags1 = [
  "Oferta",
  "Nuevo",
];

const tags2 = [
  "Oferta",
  "Pocas unidades",
];


const CatalogLayout = () => {
  const [isShowingDetails, setIsShowingDetails] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct>({src: "", id: -1});

  const showDetails = (id, src, height) => {
    setIsShowingDetails(currIsShowingDetails => !currIsShowingDetails);
    setSelectedProduct({src, id});
  }

  const closeShowDetails = () => {
    setIsShowingDetails(currIsShowingDetails => !currIsShowingDetails);
    setSelectedProduct({src: "", id: -1});
  }

  useEffect(() => {
    //Load products from API.
    
    // Render products in Component.
  });

  return (
    <div className={styles.catalogContainer}>
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

      {isShowingDetails && <ProductDetails handleClose={closeShowDetails} product={selectedProduct} />}  
	
    </div>
  );
};

export default CatalogLayout;
