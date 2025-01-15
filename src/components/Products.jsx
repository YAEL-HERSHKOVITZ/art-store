import MyContext from '../Context/Context';
import { useContext } from 'react';
import '../Css/Products.css';
import ProductsCard from "./ProductsCard"; 
import { Link } from 'react-router-dom';


function Products({ product,addToCart ,deleteProductFromArr}) {
  
    const { currentUser} = useContext(MyContext);


    return <>
        <h1 className="products-title">מוצרים</h1>
      {currentUser?.role === "manager" && ( <>
            <Link to="/AdminOptions" className="add-to-cart-button">הוספת מוצר חדש למאגר</Link> </>
        )}

        <div className="products-container">
            {product.map(p => <ProductsCard key={p.id} product={p}
             addToCart={addToCart} deleteProductFromArr={deleteProductFromArr} />)}
         
        </div>
    </>
}
export default Products



