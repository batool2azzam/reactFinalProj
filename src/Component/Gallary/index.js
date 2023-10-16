import React from "react";
import postsData from "../ExplorData"; 
import GalleryItem from "../GalleryItem"; 
import "./main.css"; 

function Gallery() {
  return (
    <div className="gallery">
      {postsData.map((item, id) => (
        <GalleryItem key={id} imagePath={item.imagepath} icon={item.icon} />
      ))}
    </div>
  );
}

export default Gallery;
