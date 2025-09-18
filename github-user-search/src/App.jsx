// src/App.jsx
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";

export default function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        GitHub User Search
      </h1>
      <SearchBar setUsers={setUsers} />
      <UserList users={users} />
    </div>
  );
}
