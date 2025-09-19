import axios from "axios";

export async function fetchAdvancedUsers(username, location, minRepos) {
  let query = "";

  if (username) query += `${username}+`;
  if (location) query += `location:${location}+`;
  if (minRepos) query += `repos:>=${minRepos}`;

  // Remove last '+' if it exists
  query = query.replace(/\+$/, "");

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`
  );

  return response.data.items; // array of users
}
