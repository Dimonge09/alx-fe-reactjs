import React, { useState } from "react";
import Search from "./components/Search";

export default function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        GitHub User Search
      </h1>

      {/* Pass setUsers to Search Component */}
      <Search setUsers={setUsers} />

      {/* Display Results */}
      <div className="mt-6 flex flex-col items-center gap-4">
        {users.length > 0 ? (
          users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-xl p-4 w-full max-w-sm text-center"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h2 className="text-xl font-semibold mt-2">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-2 inline-block"
              >
                View Profile
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No users found. Try searching above.</p>
        )}
      </div>
    </div>
  );
}
