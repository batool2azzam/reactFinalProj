import React from 'react';
import './main.css';

export default function Index({ image, username, content }) {
    return (
        <div className="dm-user">
            <div className="dm-logo">
                <img src={image} alt="/" />
            </div>
            <div className="dm-userName-content">
                <h4>{username}</h4>
                <p>{content}</p>
            </div>
            <div className="date">
                <p></p>
            </div>
        </div>
    );
}
