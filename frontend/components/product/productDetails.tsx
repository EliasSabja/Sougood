import type { ReactElement } from "react";
import { useContext } from "react";
import { Button, CloseButton, Row, Col } from 'react-bootstrap';
import styles from '../../assets/styles/components/productDetails.module.css';
import Image from 'next/image';
import { CartItemsContext } from '../../contexts/cartContext';
import Product from '../../types/product';
import { cartItemFromProduct } from '../../utils/cart';
import ICartItem from "../../types/cart";

export interface ProductDetailsProps {
  handleClose: () => void,
  product: Product,
  productImageSrc: string,
  top: number,
}

const ProductDetails = (props: ProductDetailsProps): ReactElement => {

  const { addToCart } = useContext(CartItemsContext);

  const handleAddToCart = () => {
    const cartItem: ICartItem = cartItemFromProduct(props.product);
    addToCart(cartItem);
  }

  const closeDetails = () => {
    props.handleClose();
  }

  return (
    <div onClick={closeDetails} className={styles.detailsBox}>
      <div className={styles.detailsElementsContainer} >
        <CloseButton className={styles.closeButton} onClick={closeDetails}></CloseButton>
        <Row>
          <Col> <Image className={styles.productImage} src={require('../../assets/images/' + props.product.image)} width="450px" height="490px"></Image></Col>
          <Col className={styles.productDetails}>
            <Row><b className={styles.productName}>{props.product.name}</b></Row>
            <Row className={styles.productDescription}><p>{props.product.description}</p></Row>
            <Row className={styles.addToCartButtonContainer}><Button className={styles.addToCartButton} onClick={() => handleAddToCart()} >Agregar al carrito</Button></Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProductDetails;
