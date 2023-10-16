import React from "react";
import "./main.css";
import { useState } from 'react';
import ThemeContext from '../../ThemeContext';
import { useContext } from 'react'
import axios from 'axios';

const token = localStorage.getItem("token");

function CreatePostModal({setOpenModal}) {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

    axios
      .post("http://16.170.173.197/posts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Post successful:", response.data);
        setOpenModal(response.data); 
        closeModal(); 
      })
      .catch((error) => {
        console.error("Error posting the data:", error);
      });
  };

  const handleFileUpload = (input) => {
    const file = input.files[0];
    setImage(file);
  };
  const { Theme } = useContext(ThemeContext);
  return (
    <div>

      <div onClick={openModal}>Create Post</div>

      {isModalOpen && (
        <div className="modal" >

          <form onSubmit={handleSubmit} className="modal-content" style={{ backgroundColor: Theme.main, color: Theme.secendary }}>
            <h2 >Create new Post</h2>
            <p>Description</p>
            <textarea id="input" name="description" rows="13" onChange={(e) => setDescription(e.target.value)}/>
            <h3 className="choose">Choose Image</h3>
            <input id="imageUpload" name="imageUpload" onChange={(e) => handleFileUpload(e.target)} type="file" accept="image/*" className="file" />
            <button type="submit">Post</button>
            <button type="button" onClick={closeModal}>Close</button>
            
            </form>
        </div>
      )}
    </div>
  );
}


export default CreatePostModal;