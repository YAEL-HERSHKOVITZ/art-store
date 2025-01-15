import { useContext, useState } from "react";
import MyContext from "../Context/Context";
import '../Css/Registr.css';
import { useNavigate } from 'react-router-dom';


function Registr() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registr = useContext(MyContext).registr;
  const navigate = useNavigate();

  const OnRegistr = () => {
    const newUser = { id: 0, username, email, password };
    registr(newUser);
    navigate('/home');
  };

  return (
    <div className="registr-container">
      <h1>הרשמה</h1>
      <input 
        type="text" 
        placeholder="הכנס שם" 
        onChange={(e) => setUsername(e.target.value)} 
        className="registr-input" 
      />
      <input 
        type="email" 
        placeholder="הכנס מייל" 
        onChange={(e) => setEmail(e.target.value)} 
        className="registr-input" 
      />
      <input 
        type="password" 
        placeholder="הכנס סיסמא" 
        onChange={(e) => setPassword(e.target.value)} 
        className="registr-input" 
      />
      <button onClick={OnRegistr} className="registr-button">
        הרשמה
      </button>
    </div>
  );
}

export default Registr;

