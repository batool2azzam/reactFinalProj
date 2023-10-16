import React, { useState, useEffect } from "react";
import GalleryItem from "../GalleryItem";
import axios from "axios";
import "./main.css";

function Gallery() {
  const [posts, setPosts] = useState([]);
  const myId =localStorage.getItem("id")
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://16.170.173.197/posts/${myId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const myPostData=response.data.posts.reverse() || [];
        setPosts(myPostData);
      })
      .catch((error) => {
        console.log("Error fetching posts", error);
      });
  }, []);

  return (
    <div className="gallery">
      {posts.map((item) => (
        <GalleryItem
          key={item.id}
          imagePath={item.image}
        />
      ))}
    </div>
  );
}

export default Gallery;
