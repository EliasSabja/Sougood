import React, { useEffect, useRef, useState } from 'react';
import styles from '../../assets/styles/components/productCard.module.css';
import Image from 'next/image';
import Router from 'next/router';
import { Row, Col } from 'react-bootstrap';
import Product from '../../types/product';
import { AdvancedImage } from '@cloudinary/react';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { CloudService } from "../../config/config";
import { scale } from '@cloudinary/url-gen/actions/resize';

interface ProductCardProps {
  product: Product;
  showDetails: (product: Product) => void,
};

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
  const [product, setProduct] = useState<Product>();
  const [image, setImage] = useState<CloudinaryImage>();
  const imageRef = useRef<HTMLInputElement>();
  const defaultImage = "image-default.png";

  useEffect(() => {
    setProduct(props.product);
    if (props.product.imageUrl) {
      const newImage = CloudService.image(props.product.imageUrl);
      //
      if (imageRef.current)
      {
        console.log(imageRef.current.clientWidth + ":" + imageRef.current.clientHeight);
        newImage.resize(scale()
        .width(imageRef.current.clientWidth)
        .height(imageRef.current.clientHeight));
      }
      setImage(newImage);
    };
  }, [props.product, imageRef.current]);

  const styleOptions = {
    'small': styles.small,
    'medium': styles.medium,
    'large': styles.large,
  };

  const showDetails = () => {
    props.showDetails(product);
  };

  return (
    <>
    { product &&
      <div className={styles.productCard + " " + styleOptions[product.size]} onClick={showDetails}>
        <div ref={imageRef} className={styles.productCardImageContainer}>
          {/* <Image src={require('../../assets/images/' + image)} className={styles.productCardImage} layout="fill" /> */}
          {
            image ? <AdvancedImage className={styles.productCardImage} cldImg={image} /> :
            <Image src={require('../../assets/images/' + defaultImage)} className={styles.productCardImage} layout="fill" /> 
          }  
        </div>
        <Row>
          <Col className={styles.productName + " " + styles.productText}><span>{product.name}</span></Col>
          <Col className={styles.productCategory + " " + styles.productText} onClick={(e) => { e.stopPropagation(); Router.push('/catalog/' + product.category.name) }}><span>{product.category.name}</span></Col>
        </Row>

        <div className={styles.productCardTags + " " + styles.productText}>
          {product.tags.length > 0 && product.tags.reduce((prevTag, currTag) => "#" + prevTag + " #" + currTag)}
        </div>
      </div>
    }
    </>
  );
}

export default ProductCard;
