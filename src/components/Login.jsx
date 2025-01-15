import { useContext, useState } from "react";
import MyContext from '../Context/Context';
import '../Css/Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useContext(MyContext).login;
  const navigate = useNavigate();
  const OnLogin = () => {
    login(email, password);
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h1>התחברות</h1>
      <input 
        type="email" 
        placeholder="הכנס מייל" 
        onChange={e => setEmail(e.target.value)} 
        className="login-input"
      />
      <input 
        type="password" 
        placeholder="הכנס סיסמא" 
        onChange={e => setPassword(e.target.value)} 
        className="login-input"
      />
      <button onClick={OnLogin} className="login-button">
        התחברות
      </button>
    </div>
  );
}

export default Login;
