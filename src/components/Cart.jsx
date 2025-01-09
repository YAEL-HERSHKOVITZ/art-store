import { Link } from 'react-router-dom'; // הוסף את השורה הזאת
import './Cart.css'; // אם יש לך עיצוב CSS

function Cart({ cart, deleteProduct, addToCart, calculateTotalPrice }) {


  return (
    <div className="cart-container">
      <h1>העגלה שלך</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-message">העגלה ריקה</p>
      ) : 
      (
        <>

          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={`/images/${product.img}`}
                ///מציג את כל הפרטים תמונה,שם,מידה,מחיר
                alt={product.name}
                className="product-image"
              />
              <div>
                <button className="remove-button" onClick={() => deleteProduct(product)}>-</button>

                {/* כמות המוצר בתוך ריבוע */}
                <div className="quantity-box">
                  <span>{product.quantity}</span>
                </div>

                <button className="add-button" onClick={() => addToCart(product)}>+</button>
              </div>



              <p className="product-name">{product.name}</p>
              <p className="product-size">{product.size}</p>
              <p className="product-price">{product.price} ₪</p>
            </div>
          ))}
          <p>סה"כ: {calculateTotalPrice()} ₪</p>
          
      <Link to="/checkout" className="checkout-button">
        לעמוד התשלום
      </Link>
      <Link to="/Products" className="back-to-shop-button">
        חזור לקניות
      </Link>
    </>
  )
}
    </div >
  );
}

export default Cart;

