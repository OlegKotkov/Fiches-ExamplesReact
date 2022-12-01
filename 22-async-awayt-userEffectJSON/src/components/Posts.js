import { useEffect, useState } from "react";
import Post from "./Post";
const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPost] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const post = await response.json();
        setPost(post);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <hr />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => <Post key={post.id} {...post} />)
      )}
    </div>
  );
}
export default Posts;
