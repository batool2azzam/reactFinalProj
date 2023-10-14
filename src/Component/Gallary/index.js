import React from "react";
import postsData from "../ExplorData"; // Import postsData
import GalleryItem from "../GalleryItem"; // Import GalleryItem
import "./main.css"; // Import the CSS file

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
