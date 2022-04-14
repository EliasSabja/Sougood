import React from 'react';
import Product from '../../Components/Product/index';
import {Carousel, Container, Row, Col, Button} from 'react-bootstrap';
import '../../Assets/Styles/mainPage.css';

const MainPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
	  <Row><h1>Sougood</h1></Row>
	  <Row><h4> Somos una ... que te permite ...</h4></Row>
	  <Row className="mt-100"><Button>Compra aquí!</Button></Row>
	</Col>
	<Col md="6">
	  <Carousel variant="dark">
	    <Carousel.Item interval={1000}>
	      <img
                src={require('../../Assets/Images/image1.jpg')}
                width={900} height={800}/>
              <Carousel.Caption>
                <h3>Primer producto</h3>
                <p>Descripción.</p>
              </Carousel.Caption>
            </Carousel.Item>
	    <Carousel.Item interval={500}>
	      <img
		src={require('../../Assets/Images/image2.jpg')}
		alt="Second slide"
		width={900} height={800}/>
	      <Carousel.Caption>
		<h3>Segundo producto</h3>
		<p>Descripción.</p>
	      </Carousel.Caption>
	    </Carousel.Item>
	    <Carousel.Item>
	      <img
		  src={require('../../Assets/Images/image3.jpeg')}
		  alt="Third slide" width={900} height={800}/>
	      <Carousel.Caption>
		<h3>Tercer producto</h3>
		<p>Descripción.</p>
	      </Carousel.Caption>
	    </Carousel.Item>
	  </Carousel>
	</Col>
    </Container>
  );
};

export default MainPage;
