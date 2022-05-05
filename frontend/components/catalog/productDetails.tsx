import type { ReactElement } from "react";
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
}

const ProductDetails = (props: ProductDetailsProps): ReactElement => {
  console.log("Rendering details: " + props.product.src);

  const closeDetails = () => {
    props.handleClose();
  }

  return (
    <div className={styles.detailsBox}>
      <div className={styles.detailsElementsContainer}>
	<CloseButton className={styles.closeButton} onClick={closeDetails}></CloseButton>
	  <Row>
	    <Col> <Image className={styles.productImage} src={require('../../assets/images/' + props.product.src)} width="450px" height="500px"></Image></Col>
	      <Col> 
		<Row><b>Nombre del producto</b></Row>
		  <Row><p>Descripción del producto</p></Row>
	      </Col>
	      <Col> <Button>Agregar al carrito</Button></Col>
	  </Row>
      </div>
    </div>
  );
}

export default ProductDetails;
