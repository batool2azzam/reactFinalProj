import React from "react";
import "./main.css";
import { useState } from 'react';
import ThemeContext from '../../ThemeContext';
import { useContext } from 'react'

function CreatePostModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const { Theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);
  return (
    <div>

      <div onClick={openModal}>Create Post</div>

      {isModalOpen && (
        <div className="modal" >
          <div className="modal-content" style={{ backgroundColor: Theme.main, color: Theme.secendary }}>
            <h2 >Create new Post</h2>
            <p>Description</p>
            <textarea rows="13" />
            <h3 className="choose">Choose Image</h3>
            <input type="file" accept="image/*" className="file" />
            <button>Post</button>
            <button onClick={closeModal}>Close</button>

          </div>
        </div>
      )}
    </div>
  );
}

export default CreatePostModal;
