import { Link } from 'react-router-dom';

import '../Css/ProductsCard.css';

import MyContext from '../Context/Context';
import { useContext } from 'react';

function ProductsCard({ product, addToCart, deleteProductFromArr }) {

  const handleAddToCart = () => {
    addToCart(product);
  };
  const { currentUser } = useContext(MyContext);


  return (
    <div className="product-card">
      <img src={`/Images/${product.img}`} alt={product.name} className="product-image" />
      <p className="product-name">{product.name}</p>

        <button className="details-button" onClick={handleAddToCart}>
          הוסף לעגלה
        </button>
       

      {currentUser?.role === "manager" &&
        <button className="details-button" onClick={() => deleteProductFromArr(product.id)}>
          מחק מוצר
        </button>}
        

        
        <Link to={`/productDetails/${product.id}/${product.img}/${product.name}/${product.description}/${product.size}/${product.price}`}>
          <button className="details-button">לפרטים נוספים</button>
        </Link>





    </div>
  );
}

export default ProductsCard;

