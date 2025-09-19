import React, { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

export default function Search({ setUsers }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setLocalUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setLocalUsers([]);

    try {
      const data = await fetchAdvancedUsers(username, location, minRepos);
      setLocalUsers(data);
      setUsers && setUsers(data);
    } catch (err) {
      setError("Looks like we cant find any users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-4 flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Search by username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded-xl p-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded-xl p-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded-xl p-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold rounded-xl py-2 hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded-2xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold text-center mt-2">
              {user.login}
            </h3>
            <p className="text-center text-sm text-gray-600">
              {user.location || "Location not available"}
            </p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 block text-center mt-2"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
