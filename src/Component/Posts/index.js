import React from "react";
import Post from "../Post"; // Import the Post component
import "./main.css";
import explorePic1 from "../../assest/ExplorePics/explorePic1.jpg";
import explorePic2 from "../../assest/ExplorePics/explorePic2.jpg";
import explorePic3 from "../../assest/ExplorePics/explorePic3.jpg";
import explorePic4 from "../../assest/ExplorePics/explorePic4.jpg";
import explorePic5 from "../../assest/ExplorePics/explorePic5.jpg";
import explorePic6 from "../../assest/ExplorePics/explorePic6.jpg";
import l1 from "../../assest/Avatars/cock-man.png"
import l2 from "../../assest/Avatars/man.png"
import l3 from "../../assest/Avatars/avatar1.png"
import l4 from "../../assest/Avatars/shop-assistant.png"
import l5 from "../../assest/Avatars/singer.png"
import l6 from "../../assest/Avatars/steward.png"

const posts = [
  {
    id: 1,
    userName: "rama_h",
    profileImage: l1,
    postImage: explorePic1,
    caption:
      "A breathtaking view of the sunset over the ocean. Nature never ceases to amaze me! Love the Nature✨🤍",
    date: new Date(),
    likes: 256,
  },
  {
    id: 2,
    userName: "rafah",
    profileImage:l2,
    postImage: explorePic2,
    caption:
      "Exploring the lush green forests and finding hidden gems in the wilderness.",
    date: new Date(),
    likes: 186,
  },
  {
    id: 3,
    userName: 'dania',
    profileImage: l3,
    postImage: explorePic3,
    caption: 'City lights shine bright against the dark night sky. Urban beauty at its finest!',
    date: new Date(),
    likes: 721,
  },
  {
    id: 4,
    userName: 'omar',
    profileImage: l4,
    postImage: explorePic4,
    caption: 'Indulging in a gourmet delight at a cozy restaurant. Foodie adventures await!',
    date: new Date(),
    likes: 145,
  },
  {
    id: 5,
    userName: 'alaa',
    profileImage: l5,
    postImage: explorePic5,
    caption: 'Finding tranquility in a hidden oasis surrounded by nature. Peace and serenity!',
    date: new Date(),
    likes: 642,
  },
  {
    id: 6,
    userName: 'baraa',
    profileImage: l6,
    postImage: explorePic6,
    caption: 'Waking up to the soothing morning vibes of nature. Perfect start to the day!',
    date: new Date(),
    likes: 372,
  },
];

const Posts = () => {
    return (
      <div className="posts">
        {posts.map((post) => (
          <Post
            props={post}
            key={post.id}
          />
        ))}
      </div>
    );
  };
  
  export default Posts;