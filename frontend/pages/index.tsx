import React from 'react';
import Product from '../Components/Product/index';
import {Carousel, Container, Row, Col, Button} from 'react-bootstrap';
//import styles from '../assets/styles/mainPage.module.css';
import Image from 'next/image';

const MainPage = () => {
  return (
    <Container fluid className="mainpage-container">
      <Row>
        <Col>
	  <Row><h1 className="page-description-title">Sougood</h1></Row>
	  <Row><h4 className="page-description"> Somos una ... que te permite ...</h4></Row>
	  <Row className="mt-100"><Button>Compra aquí!</Button></Row>
	</Col>
	<Col md="6">
	  <Carousel variant="dark">
	    <Carousel.Item interval={1000}>
	      <Image
                src={require('../assets/images/image1.jpg')}
                width={900} height={800}/>
              <Carousel.Caption>
                <h3>Primer producto</h3>
                <p>Descripción.</p>
              </Carousel.Caption>
            </Carousel.Item>
	    <Carousel.Item interval={500}>
	      <Image
		src={require('../assets/images/image2.jpg')}
		alt="Second slide"
		width={900} height={800}/>
	      <Carousel.Caption>
		<h3>Segundo producto</h3>
		<p>Descripción.</p>
	      </Carousel.Caption>
	    </Carousel.Item>
	    <Carousel.Item>
	      <Image
		  src={require('../assets/images/image3.jpeg')}
		  alt="Third slide" width={900} height={800}/>
	      <Carousel.Caption>
		<h3>Tercer producto</h3>
		<p>Descripción.</p>
	      </Carousel.Caption>
		</Carousel.Item>
	  </Carousel>
	    </Col>
	      </Row>
	  </Container>
  );
};

export default MainPage;
