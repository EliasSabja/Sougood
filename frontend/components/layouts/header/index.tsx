import React, { useContext, useState, useEffect } from 'react';
import styles from '../../../assets/styles/header.module.css';
import { FaSearch } from 'react-icons/fa';
import { Navbar, Nav, Container, Form, Button, FormControl } from 'react-bootstrap';
import Image from 'next/image';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartItemsContext } from '../../../contexts/cartContext';
import CategoryItem from './CategoryItem';

const CATEGORIES = [ 
  { 
    name: "Bienestar Ambiental, Animal y Humano",
    subcategories: [
    "Carta Menú", "Cosmética natural & productos funcionales",
    "Insumos y Abarrotes saludables", "Agricultura", "Cuidado de enfermos",
    "Implementos deportivos"
    ]
  },
  {
    name: "Bazar / General Store",
    subcategories: [
    "Arte & Decoración", "Materiales & Herramientas",
    "Bazar", "Limpieza"
    ],
  },
  {
    name:"Vida Sostenible",
    subcategories: [
    "Handyman & Servicios profesionales", "Bioconstrucción",
    "Tecnología, Automatización & Electrónica", "Corretaje & Propiedades",
    "Recreación & Turismo", "Delivery"
    ]
  },
  {
    name: "Clubes del buen vivir",
    subcategories: [
    "Huertas Comunitarias", "Trueques", "Mascotas",
    "Guías & Scouts", "Donaciones", "Deportes", "Artes & Hobbies"
    ]
  }
];

interface NavBarProps {
  openCart: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ openCart }) => {

  const { getTotalItems, cartItems } = useContext(CartItemsContext);
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    // Fetch categories from backend
    setCategories(CATEGORIES);

  }, [])
  
  const listCategories = categories.map(category => <CategoryItem category={category.name} subcategories={category.subcategories} componentStyle={styles.category}/>);

  return (
    <Navbar collapseOnSelect className={styles.navBar} expand="lg">
      <Container className={styles.navbarContainer} fluid>
        <Navbar.Brand className={styles.navBarBrand} href="/catalog">
          <Image src={require('../../../assets/images/logoSougood.png')} width="200px" height="60px"></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className='justify-content-around flex-grow-1 pe-3' >
          {listCategories}
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
