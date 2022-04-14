import React from 'react';
import '../../Assets/Styles/header.css';
import { Navbar, Nav, NavDropdown, Container, Form, Button, FormControl} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container fluid>
    <Navbar.Brand href="#home">Sougood</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Nav className='justify-content-center flex-grow-1 pe-3' >
	<NavDropdown title="Bienestar Ambiental, Animal y Humano">
	  <NavDropdown.Item href="#">Subcategoría 1</NavDropdown.Item>
	</NavDropdown>
	  <NavDropdown title="Bazar / General Store"> 
	    <NavDropdown.Item href="#">Subcategoría 1</NavDropdown.Item>
	  </NavDropdown>
	<NavDropdown title="Vida sostenible (Servicios)" id="collasible-nav-dropdown">
	  <NavDropdown.Item href="#">Subcategoría 1</NavDropdown.Item>
	  <NavDropdown.Item href="#">Subcategoría 2</NavDropdown.Item>
	    <NavDropdown.Item href="#">Subcategoría 3</NavDropdown.Item>
        <NavDropdown.Divider />
	  <NavDropdown.Item href="#">Subcategoría 4</NavDropdown.Item>
	  </NavDropdown>
	<NavDropdown title="Clubes del buen vivir">
    	  <NavDropdown.Item href="#">Subcategoría 1</NavDropdown.Item>
	</NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Ingresar</Nav.Link>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Buscar"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success"><i className="bi bi-search"></i></Button>
      </Form>
	</Nav>
	  </Container>
	    </Navbar>);
 };

export default NavBar;
