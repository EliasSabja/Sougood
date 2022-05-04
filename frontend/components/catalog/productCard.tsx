import React from 'react';
import styles from '../../assets/styles/components/productCard.module.css';
import Image from 'next/image';
//import { Card, Image} from 'react-bootstrap';

const styleOptions = {
  'small': styles.small,
  'medium': styles.medium,
  'large': styles.large,
};

const ProductCard = (props) => {
  return(
    <div className={styles.productCard + " " + styleOptions[props.size]}>
	<div className={styles.productCardImageContainer}>	
	  <Image src={require('../../assets/images/'+props.src)} className={styles.productCardImage} layout="fill"/>
	    </div>
	      <div className={styles.productCardTags}>#Oferta</div>
    </div>
  );
}

export default ProductCard;
