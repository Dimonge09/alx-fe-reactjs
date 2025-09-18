// a tiny axios wrapper for GitHub API
import axios from "axios";

const BASE = "https://api.github.com";

/**
 * searchUsers - search GitHub users using GitHub Search API
 * @param {string} q    - query (name and optional qualifiers)
 * @param {string} token - personal access token (optional)
 * @returns {Array} array of user objects (search items)
 */
export async function searchUsers(q, token = "") {
  const url = `${BASE}/search/users`;
  const headers = token ? { Authorization: `token ${token}` } : {};
  const res = await axios.get(url, {
    params: { q, per_page: 30 },
    headers,
  });
  return res.data.items || [];
}

/**
 * getUser - get full user profile by username
 */
export async function getUser(username, token = "") {
  const url = `${BASE}/users/${username}`;
  const headers = token ? { Authorization: `token ${token}` } : {};
  const res = await axios.get(url, { headers });
  return res.data;
}
