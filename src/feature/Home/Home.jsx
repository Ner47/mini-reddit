import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { useEffect } from "react";
import { fetchPosts, selectPosts } from "../../store/redditSlice";
import Post from "../Post/Post";

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [])

  return (
    <>
      { posts.map((post) => <Post key={post.id} post={post}></Post>) }
      
    </>
  );
}

export default Home;