import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {db} from "./components/firebase/client"
import {updateDoc, writeBatch, getDocs, collection, query, where, limit, getDoc, doc, addDoc} from 'firebase/firestore';
import { useEffect, createContext, useContext, useState } from 'react';
import {CartContextProvider} from './components/context/CartContext'
import ItemDetail from './components/ItemDetail';

function App() {
  const [products, setProducts] = useState([])
  //traer toda la data de una coleccion de firebase
const productsRef = collection (db, "products")


const getProducts = async () => {
  //traer la data de firebase
const data = await getDocs(productsRef)
const dataFiltrada = data.docs.map((doc) => ({... doc.data(), id: doc.id}))
console.log(dataFiltrada) 
setProducts(dataFiltrada)
}

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

const createOrder = () => {
  const order = {
   
  }
}

//Enviar orden
const orderCollection = collection (db, 'orders')

addDoc(orderCollection).then(({id}) => console.log(id))
}

const updateOrder = (id) => {
  const orderToUpdate = doc(db, "orders", id)
  updateDoc(orderToUpdate, {total:100})
}

const updateMultipleDocs = async () => {
  const batch = writeBatch(db)
}

  return (
    <div className="App">
        {/*<NavBar/>
        <ItemListContainer greeting=""/>*/}
    <BrowserRouter>
     {/* <CartContextProvider>  */}
    
      
        <NavBar/>
         <Routes>
         <Route path="/" element={<ItemListContainer/>} />
         <Route path="category/:id" element={<ItemListContainer />} />
         <Route path="/item/:id" element={<ItemDetailContainer />} />
         </Routes>
     {/* </CartContextProvider>    */}
    </BrowserRouter>
    <button className="btn" onClick={createOrder}> Terminar compra</button>
     <button className="btn" onClick={() => updateOrder('aote6Fq7GlOMTmdeLZxT')}> Terminar compra</button>
     <button className="btn" onClick={updateMultipleDocs}> Editar multiples docs</button>

</div>
  )
}


export default App;



/*getDoc(productRef).then((snapshot => {
    if(snapshot.exists ()){
      console.log( { id: snapshot.id, ...snapshot.data() } )
    }
  }))*/


/*
const productsRefFilter = query(
  collection(db, 'products'),
  where('price',">", 999),
  where('stock', "<", 10)
  //limit(1)
)
*/