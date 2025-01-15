
import './App.css';
import { MyApp } from './components/MyApp';
import { BrowserRouter as Router } from 'react-router-dom'; // הייבוא של BrowserRouter
import { MyProvider } from './Context/Context';
import CreateStore from './Context/store';  // אם אתה בתוך תיקיית src





function App() {
  const store = CreateStore(); // יצירת ה-store
  return (
    <MyProvider value={store}>   {/* מעביר את ה-store */}
      <Router> {/* עטיפה ב- BrowserRouter */}
        <MyApp /> {/* מציג את MyApp */}
      </Router>
    </MyProvider>
  );
}

export default App;

