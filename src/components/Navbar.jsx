import { Link } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../Context/Context';
import { useState} from 'react';
const Navbar = ({cart}) => {

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

    // פונקציה להתנתקות ואיפוס השדות
    const handleLogout = () => {
        logout();  // התנתקות
        resetInputs();  // איפוס השדות
    };

    return <>

        <nav>
            <Link to="/Home">דף הבית</Link>
            <Link to="/About">אודות</Link>
            <Link to="/Products">מוצרים</Link>
            <Link to="/Contact">צור קשר </Link>
            <Link to="/Cart">עגלה ({cart.length})</Link>
            {!currentUser ?
                <>
                    <Link to="/Login">התחברות</Link>
                    <Link to="/Registr">הרשמה</Link>
                </> : <button onClick={ () => handleLogout() }>התנתקות</button>}
            <span>{user == null ? "התחבר לאתר" : "שלום ל" + user.username}</span>
            {currentUser?.role === "manager" && <Link to="/UserManager">משתמשים</Link>}

        </nav>

    </>


}
export default Navbar