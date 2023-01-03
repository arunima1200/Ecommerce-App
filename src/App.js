import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Success from './components/Success';
import About from './components/About';
import Contact from './components/Contact';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/products' element={<Products/>} />
        <Route exact path='/products/:id' element={<Product/>} />
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/checkout" element={<Checkout/>}/>
        <Route exact path="/success" element={<Success/>}/>
      </Routes>
    </div>
  );
}

export default App;
