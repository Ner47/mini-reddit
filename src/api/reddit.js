export const API_ROOT = 'https://www.reddit.com'

// import data from  "../../data.json";

export const getPopularPosts = async () => {
  const res = await fetch('/reddit/r/popular.json');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json()
  return json.data.children.map((post) => post.data).filter((post) => !post.is_gallery)
  // const response = data.data.children.map((post) => post.data).filter((post) => !post.is_gallery)
  // return response;
};

