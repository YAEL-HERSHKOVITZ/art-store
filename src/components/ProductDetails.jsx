import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Css/ProductDetails.css';

function ProductDetails() {
  const { id, img, name, description, size, price } = useParams();
  
  const [product, setProduct] = useState({
    id,
    img,
    name,
    description,
    size,
    price
  });

  // עדכון המוצר במקרה של שינוי ב-params
  useEffect(() => {
    setProduct({
      id,
      img,
      name,
      description,
      size,
      price
    });
  }, [id, img, name, description, size, price]);

  return (
    <div className="product-details">
      <div className="text-container">
        <h1>תמונה מספר: {product.id}</h1>
        <p>
          <span>תיאור:</span> {product.description}
        </p>
        <p>
          <span>גודל:</span> {product.size}
        </p>
        <p className="price">
          <span>מחיר:</span> {product.price} ₪
        </p>
        {/* שינוי מ<a> ל<Link> כדי למנוע רענון של העמוד */}
        <Link to="/Products" className="back-button">
          חזרה למוצרים
        </Link>
      </div>
      <img src={`/Images/${product.img}`} alt={product.name} />
    </div>
  );
}

export default ProductDetails;
