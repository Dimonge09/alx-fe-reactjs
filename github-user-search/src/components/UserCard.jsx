import React from "react";

/*
  user is a GitHub search 'item' object:
  { login, id, avatar_url, html_url, ... }
*/
export default function UserCard({ user }) {
  return (
    <div style={{
      background: "white",
      padding: 12,
      borderRadius: 8,
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }}>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        <img src={user.avatar_url} alt={user.login} style={{ width: "100%", borderRadius: 6 }} />
      </a>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <strong>{user.login}</strong>
        <a href={user.html_url} target="_blank" rel="noreferrer">View</a>
      </div>
    </div>
  );
}
