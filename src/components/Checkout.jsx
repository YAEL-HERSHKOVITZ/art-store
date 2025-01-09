import React, { useState } from "react"; 
import "./Checkout.css";

function Checkout({ calculateTotalPrice }) {
  const [showPopup, setShowPopup] = useState(false); // הגדרת state

  const handleOrderConfirmation = () => {
    setShowPopup(true); // הצגת הפופ-אפ
    setTimeout(() => {
      setShowPopup(false); // הסתרת הפופ-אפ אחרי 3 שניות
    }, 3000);
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">ההזמנה שלך</h1>
      <p className="checkout-total">
        סה"כ לתשלום: <span>{calculateTotalPrice()} ₪</span>
      </p>
      <button className="checkout-button" onClick={handleOrderConfirmation}>
        לאישור הזמנה
      </button>

      {/* פופ-אפ */}
      {showPopup && (
        <div className="popup">
          <p>נשלחה חשבונית למייל</p>
        </div>
      )}
    </div>
  );
}

export default Checkout;
