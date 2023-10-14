// UserLess/index.jsx
import React from 'react';
import './main.css';

export default function Index({ image, username, follower }) {
    return (
        <div className="userLess">
            <div className="logoUserLess">
                <img src={image} alt="/" />
            </div>
            <div className="nameUserLess">
                <h4>{username}</h4>
                <p>{follower}</p>
            </div>
            <div className="followUserLess">
                <p>follow</p>
            </div>
        </div>
    );
}
