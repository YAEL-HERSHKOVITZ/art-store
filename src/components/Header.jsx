import '../Css/Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../Context/Context';
import { useState } from 'react';



const Header = ({ cart ,resetCart}) => {



    const store = useContext(MyContext); // גישה לקונטקסט
    const user = store.currentUser; // המשתמש הנוכחי
    const { currentUser, logout } = useContext(MyContext);


    const [inputValues, setInputValues] = useState({
        username: '',
        password: ''
    });

    // פונקציה לאיפוס השדות
    const resetInputs = () => {
        setInputValues({ username: '', password: '' });
    };

    const handleLogout = () => {
        logout();  // התנתקות
        resetInputs();  // איפוס השדות
        resetCart(); // איפוס העגלה כשמתנתקים

    };

    return (

        <header className="header">
            <div className="nav-auth">
                <span className="login">{user == null ? "התחבר לאתר" : `שלום ל${user.username}`}</span>
                {currentUser?.role === "manager" && <Link to="/UserManager">משתמשים</Link>}
                {!currentUser ? (
                    <>
                        <Link to="/Login">התחברות</Link>
                        <span className="divider">/</span>
                        <Link to="/Registr">הרשמה</Link>
                    </>
                ) : (
                    <button className="btn-logout" onClick={handleLogout}>התנתקות</button>
                )}

            </div>

            {/* תפריט ניווט מרכזי */}
            <nav className="nav-center">

                <Link to="/Cart">עגלה ({cart.length})</Link>
                <Link to="/Contact">צור קשר</Link>
                <Link to="/Products">מוצרים</Link>
                <Link to="/About">אודות</Link>
                <Link to="/Home">דף הבית</Link>
            </nav>
        </header>


    );
};

export default Header;
