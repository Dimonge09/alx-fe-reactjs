// src/components/SearchBar.jsx
import React, { useState } from "react";
import fetchUserData from "../services/githubService";

export default function SearchBar({ setUsers }) {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault(); // 👈 Prevents page refresh
    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUsers([]); // reset previous results

    try {
      const user = await fetchUserData(username);
      setUsers([user]); // set as array so UserList can map over it
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 border border-gray-300 p-2 rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
    </div>
  );
}
