
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from './components/ItemDetail';


function App() { 
  return (
    <div className="App">
    <header className="App-header">
    <BrowserRouter>
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

export default App
