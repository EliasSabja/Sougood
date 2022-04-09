import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, Button, FormControl } from 'react-bootstrap';

const NavBar = () => {
  return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Sougood</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
	<Nav.Link href="#features">Categoría 1</Nav.Link>
	<Nav.Link href="#pricing">Categoría 2</Nav.Link>
	<NavDropdown title="Categoría 3" id="collasible-nav-dropdown">
	  <NavDropdown.Item href="#action/3.1">Subcategoría 1</NavDropdown.Item>
	  <NavDropdown.Item href="#action/3.2">Subcategoría 2</NavDropdown.Item>
	  <NavDropdown.Item href="#action/3.3">Subcategoría 3</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Subcategoría 4</NavDropdown.Item>
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
  </Navbar.Collapse>
  </Container>
  </Navbar>);
 };

export default NavBar;
