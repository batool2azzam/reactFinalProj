import React from "react";
import "./main.css";
import Batool from "../../assest/Batool.JPG.jpg";
import SettingsIcon from "@mui/icons-material/Settings";

const Index = () => {
  const username = "batool_22";
  const bio = `batool azzam <br/>
  Hi all, welcome to my profile.<br/>
CSE-AAUP 🤍✨`;
  const posts = 11;
  const followers = 1200;
  const following = 900;

  return (
    <div className="instagram-bio">
      <div className="left-part">
        <img className="profile-picture" src={Batool} alt="Profile" />
      </div>
      <div className="right-part">
        <div className="user-header">
          <div className="username-actions">
            <h2 className="username">{username}</h2>
            <button className="edit-profile">Edit Profile</button>
            <button className="view-actions">View Actions</button>
            <div className="settings-icon">
              <SettingsIcon />
            </div>
          </div>
          
        </div>
        <div className="user-stats">
            <div className="stat">
              <strong>{posts}</strong> posts
            </div>
            <div className="stat">
              <strong>{followers}</strong> followers
            </div>
            <div className="stat">
              <strong>{following}</strong> following
            </div>
          </div>
          <div className="user-bio">
            <p dangerouslySetInnerHTML={{ __html: bio }} />
           </div>

      </div>
    </div>
  );
};

export default Index;
