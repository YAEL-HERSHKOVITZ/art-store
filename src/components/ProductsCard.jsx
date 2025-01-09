import { Link } from 'react-router-dom';
import './ProductsCard.css';

function ProductsCard({ product, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <img src={`/Images/${product.img}`} alt={product.name} className="product-image" />
      <p className="product-name">{product.name}</p>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        הוסף לעגלה
      </button>
      <Link to={`/productDetails/${product.id}/${product.img}/${product.name}/${product.description}/${product.size}/${product.price}`}>
        <button className="details-button">לפרטים נוספים</button>
      </Link>
    </div>
  );
}

export default ProductsCard;

