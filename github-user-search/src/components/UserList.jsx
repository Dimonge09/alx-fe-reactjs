// src/components/UserList.jsx
import React from "react";

export default function UserList({ users }) {
  if (!users || users.length === 0) {
    return <p className="text-center mt-4">No users found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="p-4 border rounded-xl shadow hover:shadow-lg transition"
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h2 className="text-center font-bold mt-2">{user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-sm block text-center mt-1"
          >
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
}
