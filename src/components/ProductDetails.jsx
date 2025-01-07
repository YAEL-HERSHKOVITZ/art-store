import './ProductDetails.css';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id, img, name, description, size, price } = useParams();

  return (
    <div className="product-details">
      <h1>תמונה מספר: {id}</h1>
      <img src={`/Images/${img}`} alt={name} />
      <p>
        <span>תיאור:</span> {description}
      </p>
      <p>
        <span>גודל:</span> {size}
      </p>
      <p className="price">
        <span>מחיר:</span> {price} ₪
      </p>
      <a href="/Products" className="back-button">
        חזרה למוצרים
      </a>
    </div>
  );
}

export default ProductDetails;







