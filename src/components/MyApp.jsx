import { useState } from 'react';
import { Routing } from './Routing';
import Header from './Header';


export const MyApp = () => {
  ///מערך של המוצרים
  const [product, setProduct] = useState([
    { id: 1, img: "Horses.png", name: "סוסים צבועיני", description: "אומנות סינית", size: 15 * 62, price: 1200 },
    { id: 2, img: "Birds.png", name: "ציפורים מצייצות", description: "אומנות סינית", size: 15 * 12, price: 5200 },
    { id: 3, img: "guitar.png", name: "גיטרה פורחת", description: "אומנות סינית", size: 15 * 62, price: 1200 },
    { id: 4, img: "Snowman.png", name: "בובת שלג", description: "אומנות סינית", size: 15 * 62, price: 2500 },
    { id: 5, img: "guitar.png", name: "גיטרה פורחת", description: "אומנות סינית", size: 15 * 62, price: 1200 },
    { id: 6, img: "Snowman.png", name: "בובת שלג", description: "אומנות סינית", size: 15 * 62, price: 2500 },
  ]);
  // עגלת מוצרים
  const [cart, setCart] = useState([]);

  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);


  ///פןנקצית הוספת מוצר
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }


    // הצגת הודעת פופ-אפ
    setPopupMessage(`המוצר "${product.name}" !המוצר נוסף בהצלחה`);
    setShowPopup(true);

    // הסתרת הפופ-אפ לאחר 3 שניות
    setTimeout(() => setShowPopup(false), 3000);
  };

  ///פונקציה למחיקת מוצר לפי id
  const deleteProduct = (product) => {
    // בודקים אם המוצר קיים בעגלה
    const existingProduct = cart.find(item => item.id === product.id);
    // אם המוצר קיים והכמות יותר מ-1, מורידים כמות ב-1
    if (existingProduct && existingProduct.quantity > 1) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      // אם כמות המוצר היא 1, מסירים אותו לחלוטין מהעגלה
      setCart(cart.filter(item => item.id !== product.id));
    }
  }

  /// מחיקת מוצר רק בשביל המנהל
  const deleteProductFromArr = (productId) => {
    setProduct((prevProducts) =>
      prevProducts.filter((item) => item.id !== productId))

  }


  /// הוספת מוצר רק בשביל המנהל
  const addProdact = (nawProduct) => {
    setProduct([...product, nawProduct])

  }


  /// פונקציה לחישוב מיחיר פרטי המוצר
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };


  return <>
    <div className="App">
    <Header cart={cart} />


      {showPopup && (
        <div className="popup">
          <button className="popup-close" onClick={() => setShowPopup(false)}>×</button>
          <p>{popupMessage}</p>
        </div>
      )}
      <main>
        <Routing product={product} cart={cart} addToCart={addToCart} deleteProduct={deleteProduct}
          calculateTotalPrice={calculateTotalPrice} deleteProductFromArr={deleteProductFromArr}
          addProdact={addProdact} />
      </main>
      <footer className="footer">
        <p>© 2025 החנות שלך. כל הזכויות שמורות.</p>
      </footer>
    </div>
  </>
}


