import '../Css/ProductDetails.css';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id, img, name, description, size, price } = useParams();

  return (
    <div className="product-details">
      <div className="text-container">
        <h1>תמונה מספר: {id}</h1>
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
      <img src={`/Images/${img}`} alt={name} />
    </div>
  );
}

export default ProductDetails;




