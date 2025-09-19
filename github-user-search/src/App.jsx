import React, { useState } from "react";
import Search from "./components/Search";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>GitHub User Search</h1>

      {/* Search Component */}
      <Search setUsers={setUser} />

      {/* Display User Data */}
      {user && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "2px solid #ddd",
              marginBottom: "10px",
            }}
          />
          <h2>{user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}
