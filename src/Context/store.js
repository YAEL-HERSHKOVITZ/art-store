import { useState } from "react";

 function CreateStore  () {

    ///מערך של המשתמשים
    const [users, setUsers] = useState([
        { id: 1, username: "yael", email: "y1234@gamil.com", password: "y1234!", role:"manager" },
        { id: 2, username: "sara", email: "s4567@gamil.com", password: "s4567!" ,role:"user" },
        { id: 3, username: "nava", email: "n8899@gamil.com", password: "n8899!", role:"user"  },
    ]);
    // יצרית משתמש נוכחי
    const [currentUser, setCurrentUser] = useState(null);

    const store = {
        users,
        currentUser,
       
        login: (email, password) => {
            const user = users.find(u => u.email == email && u.password == password);
            if (!user) {
                console.log("אחד מהפרטים לא הוזנו כראוי");
            }
            else {
                setCurrentUser(user)
                console.log(user.username + "התחברתם בהצלחה!")
            }
        },
        registr: (newUser) => {

            if (users.includes(u => u.email === newUser.email))
                console.log("המייל קיים במערת")
            else {
                const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
                const userWithId = { ...newUser, id: newId };
                newUser.id = users[users.length - 1].id + 1;
                setUsers([...users, newUser]);
                setCurrentUser(newUser)
                console.log("המשתמש נרשם בהצלחה")

            }
        },
        logout:()=>{

            setCurrentUser(null)
        }
    }

return store;


}

 export default CreateStore;