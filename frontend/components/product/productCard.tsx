import React from 'react';
import styles from '../../assets/styles/components/productCard.module.css';
import Image from 'next/image';
import Router from 'next/router';
import { Row, Col } from 'react-bootstrap';

interface ProductCardProps {
  size: string,
  src: string,
  tags: string[],
  productId: number,
  showDetails: () => void,
};

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
  const styleOptions = {
    'small': styles.small,
    'medium': styles.medium,
    'large': styles.large,
  };

  const showDetails = () => {
    props.showDetails(props.productId, props.src);
  };

  return (
    <div className={styles.productCard + " " + styleOptions[props.size]} onClick={showDetails}>
      <div className={styles.productCardImageContainer}>
        <Image src={require('../../assets/images/' + props.src)} className={styles.productCardImage} layout="fill" />
      </div>
      <Row>
        <Col className={styles.productName + " " + styles.productText}><span>Paquete de regalo</span></Col>
        <Col className={styles.productCategory + " " + styles.productText} onClick={(e) => { e.stopPropagation(); Router.push('/catalog/' + props.category) }}><span>{props.category}</span></Col>
      </Row>

      <div className={styles.productCardTags + " " + styles.productText}>
        {props.tags.reduce((prevTag, currTag) => "#" + prevTag + " #" + currTag)}
      </div>
    </div>
  );
}

export default ProductCard;
