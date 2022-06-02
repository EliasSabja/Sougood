import type { ReactElement } from "react";
import { useContext } from "react";
import { CloseButton, Row, Col } from 'react-bootstrap';
import { Button } from "../shared/buttons";
import styles from '../../assets/styles/components/productDetails.module.css';
import Image from 'next/image';
import { CartItemsContext } from '../../contexts/cartContext';
import Product from '../../types/product';
import { cartItemFromProduct } from '../../utils/cart';

export interface ProductDetailsProps {
  handleClose: () => void,
  product: Product,
  top: number,
}

const ProductDetails = (props: ProductDetailsProps): ReactElement => {

  const { addToCart } = useContext(CartItemsContext);

  const handleAddToCart = () => {
    addToCart(cartItemFromProduct(props.product));
  }

  const closeDetails = async () => {
    props.handleClose();
  }

  return (
    <div onClick={closeDetails} className={styles.detailsBox}>
      <div className={styles.detailsElementsContainer} >
        <CloseButton className={styles.closeButton} onClick={(e) => { e.stopPropagation(); closeDetails(); }}></CloseButton>
        <Row>
          <Col>
            <Image className={styles.productImage} src={require('../../assets/images/' + props.product.image)} width="450px" height="490px"></Image>
          </Col>
          <Col className={styles.productDetails}>
            <Row><b className={styles.productName}>{props.product.name}</b></Row>
            <Row className={styles.productDescription}><p>{props.product.description}</p></Row>
            <Row className={styles.addToCartButtonContainer}><Button onClick={handleAddToCart} text={"Agregar al carrrito"} /></Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProductDetails;
