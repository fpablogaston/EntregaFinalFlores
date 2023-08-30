import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';

export default function Navbar () { 
    return ( 
        <NavBar bg='dark' variant='dark' className='p-3'>
        <Container>
        <NavBar.Brand href='#home'> Tienda Deportiva</NavBar.Brand>
        <Nav className='me-auto'>
            {/*<Nav.Link href='#home'> Ropa </Nav.Link>*/}
    
    
    
        <Link to='/category/ROPA'> ROPA </Link>
        <Link to='/category/ACCESORIOS'> ACCESORIOS </Link>
        <Link to='/category/CALZADO'> CALZADO </Link>

       {/* <Nav.Link href='#features'> Accesorios </Nav.Link>
    <Nav.Link href='#pricing'> Calzado </Nav.Link>*/}
         </Nav>
        <CartWidget/>
    </Container>
    </NavBar>
    )
}


