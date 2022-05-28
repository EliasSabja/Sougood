import type { ReactElement } from 'react';
import React, { useState, useEffect } from 'react';
import styles from '../../assets/styles/catalog.module.css';
import ProductCard from '../product/productCard';
import ProductDetails from '../product/productDetails';
import { Row, Col, Container } from 'react-bootstrap';
import Product from '../../types/product';

const tags1 = [
  "Oferta",
  "Nuevo",
];

const tags2 = [
  "Oferta",
  "Pocas unidades",
];

const productsAPI: Product[] = [
  { id: "1", tags: tags1, image: "image1.jpeg", size: "small", category: "Lorem ipsum", subcategory: "lorem", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "2", tags: tags2, image: "image2.jpeg", size: "small", category: "Lorem ipsum", subcategory: "lorem", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "3", tags: tags2, image: "image3.jpeg", size: "medium", category: "Lorem ipsum", subcategory: "lorem", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "4", tags: tags1, image: "image4.jpeg", size: "large", category: "Lorem ipsum", subcategory: "lorem", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "5", tags: tags1, image: "image5.jpeg", size: "medium", category: "Lorem ipsum", subcategory: "lorem", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "6", tags: tags2, image: "image6.jpeg", size: "large", category: "Lorem ipsum", subcategory: "lorem", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "7", tags: tags1, image: "image7.jpeg", size: "large", category: "Lorem ipsum", subcategory: "lorem", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "8", tags: tags2, image: "image8.jpeg", size: "medium", category: "Lorem ipsum", subcategory: "lorem", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "9", tags: tags2, image: "image9.jpeg", size: "small", category: "Lorem ipsum", subcategory: "lorem", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "10", tags: tags2, image: "image10.jpeg", size: "medium", category: "Lorem ipsum", subcategory: "lorem", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "11", tags: tags1, image: "image11.jpeg", size: "large", category: "Lorem ipsum", subcategory: "lorem", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "12", tags: tags2, image: "image12.jpeg", size: "small", category: "Lorem ipsum", subcategory: "lorem", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "13", tags: tags1, image: "image13.jpeg", size: "large", category: "Lorem ipsum", subcategory: "lorem", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "14", tags: tags1, image: "image14.jpeg", size: "medium", category: "Lorem ipsum", subcategory: "lorem", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "15", tags: tags2, image: "image1.jpeg", size: "small", category: "Subcategoria dos", subcategory: "ipsum", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "16", tags: tags1, image: "image2.jpeg", size: "small", category: "Subcategoria dos", subcategory: "ipsum", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "17", tags: tags2, image: "image3.jpeg", size: "medium", category: "Subcategoria dos", subcategory: "ipsum", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "18", tags: tags1, image: "image4.jpeg", size: "large", category: "Subcategoria dos", subcategory: "ipsum", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "19", tags: tags2, image: "image5.jpeg", size: "medium", category: "Subcategoria dos", subcategory: "ipsum", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "20", tags: tags1, image: "image6.jpeg", size: "large", category: "Subcategoria dos", subcategory: "ipsum", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "21", tags: tags1, image: "image7.jpeg", size: "large", category: "Subcategoria dos", subcategory: "ipsum", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "22", tags: tags2, image: "image8.jpeg", size: "medium", category: "Subcategoria dos", subcategory: "ipsum", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "23", tags: tags2, image: "image9.jpeg", size: "small", category: "Subcategoria dos", subcategory: "ipsum", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "24", tags: tags1, image: "image10.jpeg", size: "medium", category: "Subcategoria dos", subcategory: "ipsum", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "25", tags: tags2, image: "image11.jpeg", size: "large", category: "Subcategoria dos", subcategory: "ipsum", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "26", tags: tags1, image: "image12.jpeg", size: "small", category: "Subcategoria dos", subcategory: "ipsum", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "27", tags: tags2, image: "image13.jpeg", size: "large", category: "Subcategoria dos", subcategory: "ipsum", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
  { id: "28", tags: tags1, image: "image14.jpeg", size: "medium", category: "Subcategoria dos", subcategory: "ipsum", name: "nombre del producto", stock: 5, description: "Descripción del producto", price: 2500 },
];

interface CatalogLayoutProps {
  category?: string,
}

const CatalogLayout: ReactElement<CatalogLayoutProps> = (props: CatalogLayoutProps) => {
  const [products, setProducts] = useState<Product[]>();
  const [category, setCategory] = useState<string>(props.category);
  const [isShowingDetails, setIsShowingDetails] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>({ src: "", id: "-1" });

  const showDetails = (product: Product) => {
    setIsShowingDetails(currIsShowingDetails => !currIsShowingDetails);
    setSelectedProduct(product);
  }

  const closeShowDetails = () => {
    setIsShowingDetails(currIsShowingDetails => !currIsShowingDetails);
    setSelectedProduct({});
  }

  useEffect(() => {
    //Load products from API.
    if (props.category) setProducts(productsAPI.filter((product) => product.category == props.category));
    else setProducts(productsAPI);
    // Render products in Component.
  }, [products]);

  useEffect(() => {
    setCategory(props.category);
  }, [props.category]);
  return (
    <div className={styles.catalogContainer}>

      {category != null &&
        <div className={styles.categoryContainer}>
          <h1 className={styles.category}>{category}</h1>
        </div>
      }

      <div className={styles.catalog}>
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} showDetails={showDetails} ></ProductCard>
        ))}
      </div>

      {isShowingDetails && <ProductDetails handleClose={closeShowDetails} product={selectedProduct} />}
    </div>
  );
};

export default CatalogLayout;
