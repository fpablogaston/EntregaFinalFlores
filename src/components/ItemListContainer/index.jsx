import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import React, { useEffect, useState} from 'react'
import Item from '../../components/Item/ItemList'
  
    function ItemListContainer () {
        const [products, setProducts] = useState([])   
    
  
        return (
            <div>
                {products.map(product => (
                    <Item key={product.id} product={product}/>
                ))}
            </div>
        )            
    }

export default ItemListContainer    

