export const fetchComments = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  return await response.json();
};
