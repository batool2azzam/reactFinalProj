import React, { useContext, useState, useEffect } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import "./main.css";
import ThemeContext from "../../ThemeContext";
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import axios from "axios";

const Post = ({ props }) => {
  const { user, image, likes, description, id ,createdAt} = props;
  const { avatar, userName } = user;
  const { Theme } = useContext(ThemeContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");

  const [deleted, setDeleted] = useState(false);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    axios
      .get("http://16.170.173.197/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.log("Error Fetching posts", error);
      });
  }, [token]);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDeletePost = () => {
    axios
      .delete(`http://16.170.173.197/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
        setDeleted(true);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  const handleEditPost = () => {
    const newDescription = prompt("Please add the new description");

    axios
      .put(`http://16.170.173.197/posts/${id}`, { description: newDescription }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setUpdated(true);
      })
      .catch((error) => {
        console.error("Error editing post:", error);
      });
  };

  useEffect(() => {
    if (deleted) {
      console.log("Post deleted successfully");
    }
    if (updated) {
      console.log("Post updated successfully");
    }
  }, [deleted, updated]);

  if (deleted ) {
    return null; 
  }
  function NearestTime(createdAt) {
    const now = new Date();
    const created = new Date(createdAt);
    const diff = now - created;
  
    if (diff < 3600000) {
      return `${Math.floor(diff / 60000)} m`;
    } else if (diff < 86400000) {
      return `${Math.floor(diff / 3600000)} h`;
    } else if (diff < 604800000) {
      return `${Math.floor(diff / 86400000)} d`;
    } else {
      return `${Math.floor(diff / 604800000)} w`;
    }
  }
  
  return (
    <div className="post linne">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }} src={avatar}></Avatar>{" "}
          <div className="usernamee">{userName}</div> • <span>{NearestTime(createdAt)}</span>
        </div>

        <MoreHorizIcon onClick={handleDropdownOpen} />
        {isDropdownOpen && (
          <div className="dropdown">
            <button onClick={handleDeletePost}>
            <RestoreFromTrashIcon />
              <p>Delete</p>
            </button>
            <button onClick={handleEditPost}>
            <CreditScoreIcon />
              <p>Edit</p>
            </button>
          </div>
        )}
      </div>
      <div className="post__image">
        <img src={image} alt="postImage" />
      </div>
      <div className="post__footer">
      <div className="post__footerIcons">
          <div className="post__iconsMain">
            <svg
              className="postIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M15.8583 2.79578C18.4708 2.79578 20.625 5.17911 20.625 8.06661C20.625 11.1833 17.9208 13.1083 15.3542 15.3999C12.7875 17.6916 11.4583 18.9291 11 19.2041C10.4958 18.8833 8.84583 17.3708 6.64583 15.3999C4.03333 13.1083 1.375 11.1833 1.375 8.06661C1.375 5.17911 3.52917 2.79578 6.14167 2.79578C8.06667 2.79578 9.12083 3.71244 9.85417 4.76661C10.725 5.95828 10.8625 6.55411 11 6.55411C11.1375 6.55411 11.275 5.95828 12.1458 4.76661C12.8792 3.71244 13.9333 2.79578 15.8583 2.79578ZM15.8583 1.42078C13.7958 1.42078 12.2375 2.24578 11 3.98744C9.7625 2.29161 8.20417 1.46661 6.14167 1.46661C2.75 1.42078 0 4.39994 0 8.06661C0 11.4124 2.475 13.5666 4.85833 15.6291C5.13333 15.8583 5.45417 16.1333 5.72917 16.4083L6.78333 17.3249C8.8 19.1124 9.80833 20.0291 10.2667 20.3041C10.4958 20.4416 10.7708 20.5333 11 20.5333C11.275 20.5333 11.5042 20.4416 11.7333 20.3041C12.1917 20.0291 13.0167 19.2958 15.3083 17.1874L16.225 16.3624C16.5458 16.0874 16.8208 15.8124 17.1417 15.5833C19.5708 13.5666 22 11.4583 22 8.06661C22 4.39994 19.25 1.42078 15.8583 1.42078Z"
                fill={Theme.four}
              />
            </svg>
            <svg
              className="postIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 22 22"
              fill="none"
            >
              <g clip-path="url(#clip0_151_217)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.7709 21.1291L20.4875 16.0875C21.3125 14.575 21.7709 12.8333 21.7709 11C21.7709 5.04163 16.9584 0.229126 11 0.229126C5.04169 0.229126 0.229187 5.04163 0.229187 11C0.229187 16.9583 5.04169 21.7708 11 21.7708C12.8334 21.7708 14.575 21.3125 16.0875 20.4875L21.1292 21.7708C21.4959 21.8625 21.8625 21.4958 21.7709 21.1291ZM20.3959 11C20.3959 12.8333 19.9375 14.2083 19.2042 15.5833C19.1125 15.7666 19.0667 15.9958 19.1125 16.225L20.075 20.075L16.2709 19.1125C16.0417 19.0666 15.8125 19.0666 15.6292 19.2041C14.8042 19.6625 13.2459 20.3958 11.0459 20.3958C5.82085 20.3958 1.60419 16.1791 1.60419 11C1.60419 5.82079 5.82085 1.60413 11 1.60413C16.1792 1.60413 20.3959 5.82079 20.3959 11Z"
                  fill={Theme.four}
                />
              </g>
              <defs>
                <clipPath id="clip0_151_217">
                  <rect width="22" height="22" fill={Theme.four} />
                </clipPath>
              </defs>
            </svg>
            <svg
              className="postIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 21 21"
              fill="none"
            >
              <g clip-path="url(#clip0_151_219)">
                <path
                  d="M21.9083 1.74167C21.7708 1.5125 21.5417 1.375 21.3125 1.375H0.6875C0.4125 1.42083 0.1375 1.60417 0.0458333 1.83333C-0.0458333 2.0625 0 2.38333 0.183333 2.6125L7.47083 9.7625L9.99167 20.1208C10.0375 20.3958 10.2667 20.5792 10.5417 20.625H10.6333C10.8625 20.625 11.0917 20.4875 11.2292 20.3042L21.8625 2.42917C22.0458 2.24583 22.0458 1.97083 21.9083 1.74167ZM2.38333 2.79583H18.6542L8.25 8.57083L2.38333 2.79583ZM10.9542 18.1958L8.9375 9.7625L19.4333 3.94167L10.9542 18.1958Z"
                  fill={Theme.four}
                />
              </g>
              <defs>
                <clipPath id="clip0_151_219">
                  <rect width="22" height="22" fill={Theme.four} />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="post__iconSave">
            <svg className="posticon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <g clip-path="url(#clip0_151_221)">
                <path d="M19.9375 22C19.7542 22 19.5708 21.9083 19.4333 21.8167L11 13.2917L2.56667 21.8167C2.38333 22 2.0625 22.0917 1.83333 21.9542C1.55833 21.8625 1.375 21.5875 1.375 21.3125V0.6875C1.375 0.320833 1.69583 0 2.0625 0H19.9375C20.3042 0 20.625 0.320833 20.625 0.6875V21.3125C20.625 21.5875 20.4417 21.8625 20.2125 21.9542C20.1208 22 20.0292 22 19.9375 22ZM11 11.9167C11.3667 11.9167 11.7333 12.0542 12.0083 12.3292L19.25 19.6625V1.375H2.75V19.6625L9.99167 12.3292C10.2667 12.0542 10.6333 11.9167 11 11.9167Z" fill={Theme.four} />
              </g>
              <defs>
                <clipPath id="clip0_151_221">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <b>{likes.length} likes</b>
        <br />
        <br />
        <b>{userName}</b>
        <br />
        <br />
        {description}
      </div>
    </div>
  );
};

export default Post;

