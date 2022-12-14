import { useState, useEffect } from "react";
import axios from "axios";
import { NewPosts } from "./NewPosts";
import { PostsIndex } from "./PostsIndex";

export function Home() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  useEffect(handleIndexPosts, []);
  return (
    <div>
      <NewPosts />
      <PostsIndex posts={posts} />
    </div>
  );
}
