import React, { useState } from "react";
import { searchUsers } from "../services/github";

/*
  SearchBar props:
    setUsers: setter for results in App
    setLoading: setter for loading boolean
    setError: setter for error message
*/
export default function SearchBar({ setUsers, setLoading, setError }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState(""); // advanced filter
  const [minRepos, setMinRepos] = useState(""); // advanced filter

  // token from .env (Vite exposes env vars with import.meta.env.VITE_*)
  const token = import.meta.env.VITE_GITHUB_TOKEN || "";

  const buildQuery = () => {
    // Build GitHub search query with qualifiers:
    // examples: "john", "john location:lagos repos:>10"
    let q = query.trim();
    if (!q) return "";
    if (location.trim()) q += ` location:${location.trim()}`;
    if (minRepos.trim()) {
      // ensure numeric and use repos:>n
      const n = Number(minRepos);
      if (!Number.isNaN(n)) q += ` repos:>${n}`;
    }
    return q;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const q = buildQuery();
    if (!q) {
      setError("Please type a search term (and optionally filters).");
      setUsers([]);
      return;
    }

    setLoading(true);
    try {
      const items = await searchUsers(q, token);
      setUsers(items);
    } catch (err) {
      console.error("GitHub search error:", err);
      setError("Failed to fetch from GitHub. See console.");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search users (e.g. 'tom' or 'john smith')"
          style={{ flex: 1, padding: 10 }}
        />
        <button type="submit" style={{ padding: "10px 14px" }}>Search</button>
      </div>

      {/* Advanced filters */}
      <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          style={{ padding: 8, width: 200 }}
        />
        <input
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min repos (optional)"
          type="number"
          min="0"
          style={{ padding: 8, width: 140 }}
        />
      </div>
    </form>
  );
}
