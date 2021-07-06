import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users";
const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1>Git hub</h1>
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <ul>
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <h4> {login}</h4>
              <a href={html_url}></a>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
export default App;
