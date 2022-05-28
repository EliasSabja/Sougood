import React, { useContext } from 'react';
import styles from '../../../assets/styles/header.module.css';
import { FaSearch } from 'react-icons/fa';
import { Navbar, Nav, NavDropdown, Container, Form, Button, FormControl } from 'react-bootstrap';
import Image from 'next/image';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartItemsContext } from '../../../contexts/cartContext';

interface NavBarProps {
  openCart: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ openCart }) => {

  const { getTotalItems, cartItems } = useContext(CartItemsContext);

  return (
    <Navbar collapseOnSelect className={styles.navBar} expand="lg">
      <Container className={styles.navbarContainer} fluid>
        <Navbar.Brand href="/catalog">
          <Image src={require('../../../assets/images/logoSougood.png')} width="260px" height="80px"></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className='justify-content-center flex-grow-1 pe-3' >
          <NavDropdown title={<span className={styles.category}>Bienestar Ambiental, Animal y Humano</span>}>
            <NavDropdown.Item href="#">Subcategoría 1</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={<span className={styles.category}>Bazar / General Store</span>}>
            <NavDropdown.Item href="#">Subcategoría 1</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={<span className={styles.category}>Vida sostenible (Servicios)</span>} id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">Subcategoría 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Subcategoría 2</NavDropdown.Item>
            <NavDropdown.Item href="#">Subcategoría 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Subcategoría 4</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={<span className={styles.category}>Clubes del buen vivir</span>}>
            <NavDropdown.Item href="#">Subcategoría 1</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets"><span className={styles.category}>Ingresar</span></Nav.Link>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button className={styles.iconButton} variant="outline-success"><FaSearch /></Button>
          </Form>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <Button onClick={openCart} className={styles.iconButton} variant="outline-success"><ShoppingCartIcon /></Button>
          </Badge>
        </Nav>
      </Container>
    </Navbar >);
};

export default NavBar;
