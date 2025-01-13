import { useContext, useState } from "react"
import MyContext from "../Context/Context";

function Registr(){

const [username,setUsername]=useState("");
const [email,setEmail]=useState("");
const [password, setPassword]=useState("");

const registr=useContext(MyContext).registr;
 const OnRegistr=()=>{
    const newUser = { id: 0, username, email, password };
    registr(newUser)
 }

    return<>
    <h1>הרשמה</h1>
    
<input type="username" placeholder="הכנס שם" onChange={(e)=>{setUsername(e.target.value)}}/>
<input type="email" placeholder="הכנס מייל" onChange={(e)=>{setEmail(e.target.value)}}/>
<input type="password" placeholder="הכנס סיסמא" onChange={(e) => setPassword(e.target.value)}/>

<button onClick={ ()=> { OnRegistr() }}>הרשמה</button>


    </>
}


 export default Registr
