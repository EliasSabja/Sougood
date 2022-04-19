import React from 'react';
import styles from '../../assets/styles/components/productCard.module.css';

const styleOptions = {
  'small': styles.small,
  'medium': styles.medium,
  'large': styles.large,
};

const ProductCard = (props) => {
  return(
    <div className={styles.productcard + " " + styleOptions[props.size]}>

    </div>
  );
}

export default ProductCard;
