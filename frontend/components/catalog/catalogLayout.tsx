import type { ReactElement } from 'react';
import React, { useState, useEffect } from 'react';
import styles from '../../assets/styles/catalog.module.css';
import ProductCard from '../product/productCard';
import ProductDetails from '../product/productDetails';
import { Row, Col, Container } from 'react-bootstrap';

const tags1 = [
  "Oferta",
  "Nuevo",
];

const tags2 = [
  "Oferta",
  "Pocas unidades",
];
const productsAPI = [
  {id: 1, tags: tags1, src:"image1.jpeg", size:"small", subcategory: "Lorem ipsum"},
  {id: 2, tags: tags2, src:"image2.jpeg", size:"small", subcategory: "Lorem ipsum"}, 
  {id: 3, tags: tags2, src:"image3.jpeg", size:"medium", subcategory: "Lorem ipsum"},
  {id: 4, tags: tags1, src:"image4.jpeg", size:"large", subcategory: "Lorem ipsum"},
  {id: 5, tags: tags1, src:"image5.jpeg", size:"medium", subcategory: "Lorem ipsum"},
  {id: 6, tags: tags2, src:"image6.jpeg", size:"large", subcategory: "Lorem ipsum"},
  {id: 7, tags: tags1, src:"image7.jpeg", size:"large", subcategory: "Lorem ipsum"},
  {id: 8, tags: tags2, src:"image8.jpeg", size:"medium", subcategory: "Lorem ipsum"},
  {id: 9, tags: tags2, src:"image9.jpeg", size:"small", subcategory: "Lorem ipsum"},
  {id: 10, tags: tags2, src:"image10.jpeg", size:"medium", subcategory: "Lorem ipsum"},
  {id: 11, tags: tags1, src:"image11.jpeg", size:"large", subcategory: "Lorem ipsum"},
  {id: 12, tags: tags2, src:"image12.jpeg", size:"small", subcategory: "Lorem ipsum"},
  {id: 13, tags: tags1, src:"image13.jpeg", size:"large", subcategory: "Lorem ipsum"},
  {id: 14, tags: tags1, src:"image14.jpeg", size:"medium", subcategory: "Lorem ipsum"},
  {id: 15, tags: tags2, src:"image1.jpeg", size:"small", subcategory: "Subcategoria dos"},
  {id: 16, tags: tags1, src:"image2.jpeg", size:"small", subcategory: "Subcategoria dos"},
  {id: 17, tags: tags2, src:"image3.jpeg", size:"medium", subcategory: "Subcategoria dos"},
  {id: 18, tags: tags1, src:"image4.jpeg", size:"large", subcategory: "Subcategoria dos"},
  {id: 19, tags: tags2, src:"image5.jpeg", size:"medium", subcategory: "Subcategoria dos"},
  {id: 20, tags: tags1, src:"image6.jpeg", size:"large", subcategory: "Subcategoria dos"},
  {id: 21, tags: tags1, src:"image7.jpeg", size:"large", subcategory: "Subcategoria dos"},
  {id: 22, tags: tags2, src:"image8.jpeg", size:"medium", subcategory: "Subcategoria dos"},
  {id: 23, tags: tags2, src:"image9.jpeg", size:"small", subcategory: "Subcategoria dos"},
  {id: 24, tags: tags1, src:"image10.jpeg", size:"medium", subcategory: "Subcategoria dos"},
  {id: 25, tags: tags2, src:"image11.jpeg", size:"large", subcategory: "Subcategoria dos"},
  {id: 26, tags: tags1, src:"image12.jpeg", size:"small", subcategory: "Subcategoria dos"},
  {id: 27, tags: tags2, src:"image13.jpeg", size:"large", subcategory: "Subcategoria dos"},
  {id: 28, tags: tags1, src:"image14.jpeg", size:"medium", subcategory: "Subcategoria dos"},


];

interface Product {
  id: number,
  tags: string,
  src: string,
  size: string,
  subcategory: string,
}

interface CatalogLayoutProps {
  subcategory?: string,
}

const CatalogLayout: ReactElement<CatalogLayoutProps> = (props: CatalogLayoutProps) => {
  const [products, setProducts] = useState<Product[]>();
  const [subcategory, setSubcategory] = useState<string>(props.subcategory);
  const [isShowingDetails, setIsShowingDetails] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct>({src: "", id: -1});

  const showDetails = (id, src) => {
    setIsShowingDetails(currIsShowingDetails => !currIsShowingDetails);
    setSelectedProduct({src, id});
  }

  const closeShowDetails = () => {
    setIsShowingDetails(currIsShowingDetails => !currIsShowingDetails);
    setSelectedProduct({src: "", id: -1});
  }
 
  useEffect(() => {
    //Load products from API.
    if (props.subcategory) setProducts(productsAPI.filter((product) => product.subcategory == props.subcategory));
    else setProducts(productsAPI);
    // Render products in Component.
  }, [products]);

  useEffect(() => {
    setSubcategory(props.subcategory);
  }, [props.subcategory]); 
  return (
    <div className={styles.catalogContainer}>
      
      {subcategory != null &&
	<div className={styles.subcategoryContainer}>    
	  <h1 className={styles.subcategory}>{subcategory}</h1>
	</div>
      }
      
    <div className={styles.catalog}>
     {products && products.map(({ id, tags, src, size, subcategory }) => (
	  <ProductCard key={id} size={size} src={src} tags={tags} productId={id} showDetails={showDetails} subcategory={subcategory} ></ProductCard>
      ))}
    </div>

      {isShowingDetails && <ProductDetails handleClose={closeShowDetails} product={selectedProduct} />}
    </div>
  );
};

export default CatalogLayout;
