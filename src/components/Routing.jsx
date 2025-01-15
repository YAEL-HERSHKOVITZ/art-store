
import { Route, Routes } from 'react-router-dom'; 
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Login from './Login';
import Registr from './Registr';
import Cart from './Cart';
import Checkout from './Checkout';
import UserManager from './UserManager';
import AdminOptions from './AdminOptions';



export const Routing = ({product,addToCart ,cart,deleteProduct,calculateTotalPrice,deleteProductFromArr,addProdact}) => { 
    return (                       
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/Products" element={<Products product={product} addToCart={addToCart} deleteProductFromArr={deleteProductFromArr} />} /> 
        <Route path="/productDetails/:id/:img/:name/:description/:size/:price" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/cart" element={<Cart cart={cart} deleteProduct={deleteProduct} addToCart={addToCart} calculateTotalPrice={calculateTotalPrice} />}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/registr" element={<Registr />}/>
        <Route path="/checkout" element={<Checkout calculateTotalPrice={calculateTotalPrice} />} />
        <Route path="UserManager" element={<UserManager/>}/>
        <Route path="/AdminOptions" element={<AdminOptions addProdact={addProdact} />} />

        <Route path="/" element={<Home/>}/>

      </Routes>
    );
};



