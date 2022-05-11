import React from 'react';
import styles from '../../assets/styles/components/productCard.module.css';
import Image from 'next/image';

const styleOptions = {
  'small': styles.small,
  'medium': styles.medium,
  'large': styles.large,
};

interface ProductCardProps {
  size: string,
  src: string,
  tags: string[],
  productId: number,
  showDetails: () => void,
};

const ProductCard : ReactFC<ProductCardProps>= (props: ProductCardProps) => {
  
  const showDetails = (event) => {
    props.showDetails(props.productId, props.src, event.clientY);
  };

  return(
    <div className={styles.productCard + " " + styleOptions[props.size]} onClick={showDetails}>
	    <div className={styles.productCardImageContainer}>	
	      <Image src={require('../../assets/images/'+props.src)} className={styles.productCardImage} layout="fill"/>
	    </div>
	    <div className={styles.productName + " " + styles.productText}><span>Paquete de regalo</span></div>
	    <div className={styles.productSubcategory + " " + styles.productText}><span>Lorem ipsum</span></div>
	    
	    <div className={styles.productCardTags + " " + styles.productText}>
		    {props.tags.reduce((prevTag, currTag) => "#" + prevTag + " #" + currTag)}
	    </div>
    </div>
  );
}

export default ProductCard;
