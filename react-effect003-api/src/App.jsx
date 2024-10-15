/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import User from "./components/User";
import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json.users);
      });
  }, []);

  return (
    <>
      <h3>Usuários inscritos</h3>
      <hr />
      {users.map((user) => {
        return (
          //   <div key={user.id}>
          //     {user.firstName} {user.lastName}
          //   </div>
          <User key={user.id} usuario={user} />
        );
      })}
    </>
  );
}
