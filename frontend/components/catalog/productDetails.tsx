import type { ReactElement} from "react";
import {useState, useEffect } from "react";
import { Button, CloseButton, Row, Col } from 'react-bootstrap';
import styles from '../../assets/styles/components/productDetails.module.css';
import Image from 'next/image';

export interface SelectedProduct {
  src: string,
  id: number,
}

export interface ProductDetailsProps {
  handleClose: () => void,
  product: SelectedProduct,
  productImageSrc: string,
  top: number,
}

const ProductDetails = (props: ProductDetailsProps): ReactElement => {
  const closeDetails = () => {
    props.handleClose();
  }

  return (
    <div className={styles.detailsBox}>
      <div className={styles.detailsElementsContainer} >
	<CloseButton className={styles.closeButton} onClick={closeDetails}></CloseButton>
	  <Row>
	    <Col> <Image className={styles.productImage} src={require('../../assets/images/' + props.product.src)} width="450px" height="490px"></Image></Col>
	      <Col className={styles.productDetails}> 
		<Row><b className={styles.productName}>Nombre del producto</b></Row>
		<Row className={styles.productDescription}><p>Descripción del producto</p></Row>
		<Row className={styles.addToCartButtonContainer}><Button className={styles.addToCartButton}>Agregar al carrito</Button></Row>
	      </Col>
	  </Row>
      </div>
    </div>
  );
}

export default ProductDetails;
