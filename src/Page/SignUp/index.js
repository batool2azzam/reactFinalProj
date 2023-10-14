import React, { useState } from "react";
import "./main.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Index() {

  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: ""
  });

  function handleSubmit(e) {
    e.preventDefault()

    axios.post("http://16.170.173.197/users/signup", userData)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token)
        navigate("/")

      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <p>Sign up to see photos and videos from your friends.</p>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="18"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M25.6666 14.0001C25.6666 7.55676 20.4432 2.33342 13.9999 2.33342C7.55659 2.33342 2.33325 7.55676 2.33325 14.0001C2.33325 19.8233 6.59958 24.6498 12.177 25.525V17.3725H9.21476V14.0001H12.177V11.4298C12.177 8.50582 13.9188 6.89071 16.5837 6.89071C17.8601 6.89071 19.1952 7.11858 19.1952 7.11858V9.98967H17.7241C16.2748 9.98967 15.8228 10.889 15.8228 11.8116V14.0001H19.0585L18.5413 17.3725H15.8228V25.525C21.4003 24.6498 25.6666 19.8233 25.6666 14.0001Z"
            fill="white"
          />
        </svg>{" "}
        Login With Facebook
      </button>
      <p>or</p>

      <input
        type="email"
        placeholder="Email"
        name="email"
        value={userData.email}
        onChange={(e) => {
              setUserData({ ...userData, email: e.target.value })
        }}
      />
      <input
        name="userName"
        type="text"
        placeholder="Username"
        value={userData.userName}
        onChange={(e) => {
          setUserData({ ...userData, userName: e.target.value })
        }}
      />
      <input
      name="password"
        type="password"
        placeholder="Password"
        value={userData.password}
                  onChange={(e) => {
                    setUserData({ ...userData, password: e.target.value })
                  }}
      />
      <button type="submit">Sign up</button>
      <p>
        By signing up, you agree to our Terms, Privacy Policy and Cookies
        Policy.
      </p>
    </form>
  );
}

export default Index;
