import React, { useState } from "react";
import fetchUserData from "../services/githubService";

export default function Search({ setUsers }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError("");
    try {
      const user = await fetchUserData(searchTerm);
      setUsers([user]); // we pass array so UserList or parent can map
    } catch (err) {
      console.error(err);
      setError("Looks like we cant find the user");
      setUsers([]); // clear results if error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search GitHub username..."
          className="border rounded-lg p-2 flex-1"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="text-gray-500">Loading...</p>}

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
