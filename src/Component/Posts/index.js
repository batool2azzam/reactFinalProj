import React, { useState, useEffect } from "react";
import Post from "../Post";
import axios from "axios";
import "./main.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://16.170.173.197/posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const reversedPosts = response.data.posts.reverse();
        setPosts(reversedPosts);
        console.log(reversedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [token]);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.id} props={post} />
      ))}
    </div>
  );
};

export default Posts;
