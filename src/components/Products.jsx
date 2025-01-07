
import './Products.css';
import ProductsCard from "./ProductsCard"; 
function Products({ product,addToCart}) {
    return <>
        <h1 className="products-title">מוצרים</h1>
        <div className="products-container">
            {product.map(p => <ProductsCard key={p.id} product={p} addToCart={addToCart}  />)}
           
        </div>
    </>
}
export default Products



