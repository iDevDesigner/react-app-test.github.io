import React, { useState } from "react";
import Tweet from "./Tweet";

function Twee() {
  const [users, setUsers] = useState([
    { name: "MacroniWeb", message: "web is awesome", likes: "20M" },
    { name: "john", message: "i am Jhon Snow", likes: "10M" },
    { name: "ed", message: "hello there!", likes: "20M" }
  ]);

  return (
    <div className="second">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes} />
      ))}
    </div>
  );
}

export default Twee;
