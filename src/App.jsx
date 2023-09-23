
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {db} from "./components/firebase/client"
import {updateDoc, writeBatch, getDocs, collection, query, where, limit, getDoc, doc, addDoc, orders} from 'firebase/firestore';
import React, { useEffect, createContext, useContext, useState , createOrder } from 'react';
import ItemDetail from './components/ItemDetail';
import { CartContextProvider } from './components/context/CartContext';

/*export const ThemeContext = createContext ()*/

function App() {
/*  const [products, setProducts] = useState([])
  //traer toda la data de una coleccion de firebase
const productsRef = collection (db, "products")


const getProducts = async () => {
  //traer la data de firebase
const data = await getDocs(productsRef)
const dataFiltrada = data.docs.map((doc) => ({... doc.data(), id: doc.id}))
console.log(dataFiltrada) 
setProducts(dataFiltrada)
}

useEffect(() => {
  //getProduct()
  getProducts()
}, [])

const productRef = doc(db, "products", "aote6Fq7GlOMTmdeLZxT")
const getProduct = () => { 
getDoc(productRef).then((snapshot => {
  if(snapshot.exists ()){
    console.log( { id: snapshot.id, ...snapshot.data() } )
  }
}))


/*
useEffect(() => {

  getProducts()
},[])
*/
/*
const createOrder = () => {
  const order = {
   buyer: {name:"luciano", phone: "12123123", email:"luciano@luciano.com"},
  items: products[0],
  total: products[0].price
  }

//Enviar orden
const orderCollection = collection (db, 'orders')

addDoc(orderCollection, order).then(({id}) => console.log(id))
}

const updateOrder = (id) => {
  const orderToUpdate = doc(db, "orders", id)
  updateDoc(orderToUpdate, {total:100})
}*/

  return (
    <div className="App">
    <header className="App-header">
   {/*<div className="card-container">
     {products?.map(pr => {
      return(
        <div className='card' key={pr.id}>
          <p> {pr.title} </p>
          <p> {pr.description} </p>
          <p> {pr.price} </p>
          </div>
      )
     })}  
    <div> 
     <button className="btn" onClick={createOrder}> Agregar item</button>
     {/*<button className="btn" onClick={() => updateOrder('aote6Fq7GlOMTmdeLZxT')}> Terminar compra</button>
    
    </div>
    </div>*/}
    <BrowserRouter>
     <CartContextProvider> 
     </CartContextProvider> 
        <NavBar/>
         <Routes>
         <Route path="/" element={<ItemListContainer/>} />
         <Route path="category/:id" element={<ItemListContainer />} />
         <Route path="/item/:id" element={<ItemDetailContainer />} />
         </Routes>   
    </BrowserRouter>
    </header>
    </div>
  )
  }






   /* 
  </header>
</div>
  )
}

getDoc(productRef).then((snapshot => {
    if(snapshot.exists ()){
      console.log( { id: snapshot.id, ...snapshot.data() } )
    }
  }))

const productsRefFilter = query(
  collection(db, 'products'),
  where('price',">", 999),
  where('stock', "<", 10)
 
)  */


export default App
