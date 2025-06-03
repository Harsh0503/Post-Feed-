const API = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (start = 0, limit = 6) => {
  const response = await fetch(`${API}/posts?_start=${start}&_limit=${limit}`);
  return await response.json();
};
