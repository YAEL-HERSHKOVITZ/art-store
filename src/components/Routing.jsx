
import { Route, Routes } from 'react-router-dom'; 
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Login from './Login';
import Cart from './Cart';

export const Routing = ({product,addToCart ,cart,deleteProduct}) => { 
    return (                       
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/Products" element={<Products product={product} addToCart={addToCart}/>} /> 
        <Route path="/productDetails/:id/:img/:name/:description/:size/:price" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/cart" element={<Cart cart={cart} deleteProduct={deleteProduct} addToCart={addToCart} />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    );
};





