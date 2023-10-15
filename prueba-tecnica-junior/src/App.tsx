import { useState, useEffect } from "react"
import getUsers from "./services/users"
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    })
  }, []);

  return (
    <div>
      <UserList userList={users} />
    </div>
  )
}

export default App
