import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../components/CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';

export default function Navbar () { 
    return ( 
    <NavBar bg='dark' variant='dark' className='p-3'>
      <Container>
        <NavBar.Brand href='#home'> <Link to ='/'> Tienda Deportiva </Link> </NavBar.Brand>
        <Nav className='me-auto'>
            <Nav.Link as={Link} to='category/ROPA'> Ropa</Nav.Link>
            <Nav.Link as={Link} to='category/ACCESORIOS'> Accesorios </Nav.Link>
            <Nav.Link as={Link} to='category/CALZADO'> Calzado </Nav.Link>
         </Nav>
        <CartWidget/>
      </Container>
    </NavBar>
    )
}


