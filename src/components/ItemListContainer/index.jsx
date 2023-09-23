import { useParams, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import React, { useEffect, useState} from 'react'
import Item from '../../components/Item/ItemList'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/client'

  
    //firebase II
    function ItemListContainer () {
        const [products, setProducts] = useState([])   
    
     /*
    const ref = collection(db, 'products')
    const getProducts = async () => { 
        const data = await getDocs(ref)
        const dataFiltrada = data.docs.map((doc) => ({... doc.data(), id: doc.id}))
        console.log(dataFiltrada) 
        setProducts(dataFiltrada)
    }
        
        useEffect(() => {
          getProducts()
        }, []) 
    */
        return (
            <div>
                {products.map(product => (
                    <Item key={product.id} product={product}/>
                ))}
            </div>
        )            
    }



      /*export default function ItemListContainer () { 
const ItemListContainer = ({greeting}) => {
    return(
        <p className = "mensaje">{greeting} </p>
        
    )*/
   /* const [items, setItems] = useState([])
    const {id} = useParams()

    useEffect(() => {     
    const getProducts = async () => {
        const response = await fetch ('/data/products.json')
        const products = await response.json()

        const productosFiltrados = products.filter(product => product.category === id) 

        if(productosFiltrados.length > 0) return setItems(productosFiltrados)

        setItems(products)
    } */


/*

    return ( 
    
        <Container fluid className='mt-4'>
            <Row>
                {items.map(item => (
                <Col key={item.id} lg={4} className='mb-4'>
                <Card>
                        {/*<Card.Img variant='top' src={img}/>  */
                   /*     <Card.Body>
                            <Card.Title> {item.name}</Card.Title>
                             <Card.Text> {item.description} </Card.Text> 
                            {/*<Button Variant='dark'> View more </Button>*/
                        /*   <Link to={`/item/${item.id}`}> View more </Link>
                        </Card.Body>
                    </Card>
                  
                </Col>
                  ))}
            </Row>
                </Container>  
    ) 
} 

*/

export default ItemListContainer    

