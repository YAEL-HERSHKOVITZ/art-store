import { useContext } from "react";
import MyContext from "../Context/Context";

import '../Css/UserManager.css';
function UserManager() {
  const { users } = useContext(MyContext);

  return (
    <div className="user-manager-container">
      <h1>משתמשים</h1>
      <ul>
        {users && users.map(u => (
          <li key={u.id}>
            <span>{u.id}</span> | <span>{u.username}</span> | <span>{u.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserManager;
