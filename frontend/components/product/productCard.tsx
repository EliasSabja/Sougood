import React from 'react';
import styles from '../../assets/styles/components/productCard.module.css';
import Image from 'next/image';
import Router from 'next/router';
import { Row, Col } from 'react-bootstrap';
import Product from '../../types/product';

interface ProductCardProps {
  product: Product;
  showDetails: (product: Product) => void,
};

/*export default interface ICartItem {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  image: string;
  price: number;
  amount: number;
};*/

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
  const styleOptions = {
    'small': styles.small,
    'medium': styles.medium,
    'large': styles.large,
  };

  console.log(props.product);

  const showDetails = () => {
    props.showDetails(props.product);
  };

  return (
    <div className={styles.productCard + " " + styleOptions[props.product.size]} onClick={showDetails}>
      <div className={styles.productCardImageContainer}>
        <Image src={require('../../assets/images/' + props.product.image)} className={styles.productCardImage} layout="fill" />
      </div>
      <Row>
        <Col className={styles.productName + " " + styles.productText}><span>Paquete de regalo</span></Col>
        <Col className={styles.productCategory + " " + styles.productText} onClick={(e) => { e.stopPropagation(); Router.push('/catalog/' + props.product.category) }}><span>{props.product.category}</span></Col>
      </Row>

      <div className={styles.productCardTags + " " + styles.productText}>
        {props.product.tags.reduce((prevTag, currTag) => "#" + prevTag + " #" + currTag)}
      </div>
    </div>
  );
}

export default ProductCard;
