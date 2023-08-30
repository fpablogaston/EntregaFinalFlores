import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        {/*<NavBar/>
        <ItemListContainer greeting=""/>*/}

<BrowserRouter>
<NavBar/>
<Routes>
  <Route path="/" element={<ItemListContainer/>} />
  <Route path="category/:id" element={<ItemListContainer />} />
  <Route path="/item/:id" element={<ItemDetailContainer />} />
</Routes>
</BrowserRouter>
</div>
  )
}

export default App;

