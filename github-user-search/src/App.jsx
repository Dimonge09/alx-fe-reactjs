import React, { useState } from "react";
import Search from "./components/Search";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search setUser={setUser} />

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <h2>{user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
