import type { ReactElement } from "react";
import { CloseButton } from 'react-bootstrap';
import styles from '../../assets/styles/components/productDetails.module.css';
import Image from 'next/image';

export interface ProductDetailsProps {
  handleClose: () => void,
  productId: number,
}

const ProductDetails = (props: ProductDetailsProps): ReactElement => {
  console.log("Rendering details: " + props.productId);

  const closeDetails = () => {
    props.handleClose();
  }

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.details}>
	    <CloseButton className={styles.closeButton} onClick={closeDetails}></CloseButton>
	    <b>Design your popup</b>
	    <p>Lorem ipsum</p>
      </div>
    </div>
  );
}

export default ProductDetails;
