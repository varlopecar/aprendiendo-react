import { useState, useEffect } from "react"
import getUsers from "./services/users"
import { User } from "./models/User";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    })
  }, []);

  return (
    <>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
