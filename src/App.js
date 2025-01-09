
import './App.css';// קישור לקובץ CSS
import { BrowserRouter as Router, Link } from 'react-router-dom'; // ייבוא עבור Router ו-Link
import { Routing } from './components/Routing';
import { useState } from 'react';


function App() {


  ///מערך של המוצרים
  const [product] = useState([
    { id: 1, img: "Horses.png", name: "סוסים צבועיני", description: "אומנות סינית", size: 15 * 62, price: 1200 },
    { id: 2, img: "Birds.png", name: "ציפורים מצייצות", description: "אומנות סינית", size: 15 * 12, price: 5200 },
    { id: 3, img: "guitar.png", name: "גיטרה פורחת", description: "אומנות סינית", size: 15 * 62, price: 1200 },
    { id: 4, img: "Snowman.png", name: "בובת שלג", description: "אומנות סינית", size: 15 * 62, price: 2500 },
  ]);
  // עגלת מוצרים
  const [cart, setCart] = useState([]);

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

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <Router>
      <div className="App">
        <header className="header">
          <nav>
            <Link to="/Home">דף הבית</Link>
            <Link to="/About">אודות</Link>
            <Link to="/Products">מוצרים</Link>
            <Link to="/Contact">צור קשר </Link>
            <Link to="/Cart">עגלה ({cart.length})</Link>
            <Link to="/Login">התחברות</Link>
          </nav>
        </header>
        <main>

          <Routing product={product} cart={cart} addToCart={addToCart} deleteProduct={deleteProduct} calculateTotalPrice={calculateTotalPrice} />
        </main>
        <footer className="footer">
          <p>&copy;כל הזכויות </p>
        </footer>
      </div>
    </Router>

  );
}

export default App;
