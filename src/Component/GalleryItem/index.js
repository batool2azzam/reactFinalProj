import React from "react";
import PropTypes from "prop-types";
import "./main.css"; 
function GalleryItem({ imagePath, icon }) {
  return (
    <div className="gallery-item">
      <img className="gallery-img" alt="gallery-post" src={imagePath} />
      {icon && (
        <span
          className="gallery-icon"
          dangerouslySetInnerHTML={{ __html: icon }} 
        ></span>
      )}
    </div>
  );
}

GalleryItem.defaultProps = {
  imagePath: "/images/transparent.png",
  icon: "",
};

GalleryItem.propTypes = {
  imagePath: PropTypes.string,
  icon: PropTypes.string,
};

export default GalleryItem;
