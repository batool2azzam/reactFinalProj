import React, { useState } from 'react';
import { useContext } from 'react'
import './main.css';
import Logo from '../../assest/instagram-logo.png';
import Logo2 from '../../assest/instagram-logo2.png';
import Batool from '../../assest/Batool.JPG';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Search from '@mui/icons-material/Search';
import ThemeContext from '../../ThemeContext';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';



// import Explore from '@mui/icons-material/Explore';
// import Slideshow from '@mui/icons-material/Slideshow';
// import Chat from '@mui/icons-material/Chat';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import Modal from '../Modal';

export default function LeftBar() {
  const [modalOpen, setModalOpen] = useState(true);
  const { Theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    if (selectedTheme == "dark") {
      setSelectedTheme("light")

    }
    else {
      setSelectedTheme("dark")
    }
  }

  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <div className="leftbar" style={{ backgroundColor: Theme.main, color: Theme.secendary }} >
      <div className="logo-left" >
        {selectedTheme == "dark" && (<img src={Logo} alt='' />)

        }
        {selectedTheme == "light" && (<img src={Logo2} alt='' />)

        }
      </div>

      <div className="icons"  >
        <Link className="icon">
          <div className="icon-logo">
            <SettingsBrightnessIcon onClick={handleChangeTheme} className='iconMood' style={{ color: Theme.four }} />
          </div>
          <div className="name-icon">

          </div>
        </Link>

        <Link to="/home" className="icon" style={{ color: Theme.four }} >
          <div className="icon-logo">
            <HomeIcon />
          </div>
          <div className="name-icon">
            Home
          </div>
        </Link>



        <Link to="/home" className="icon" style={{ color: Theme.four }}>
          <div className="icon-logo">
            <Search />
          </div>
          <div className="name-icon">
            Search
          </div>
        </Link>

        <Link to="/explore" className="icon" style={{ color: Theme.four }}>
          <div className="icon-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <g clip-path="url(#clip0_2058_123)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C4.95 0 0 4.95 0 11C0 17.05 4.95 22 11 22C17.05 22 22 17.05 22 11C22 4.95 17.05 0 11 0ZM11 20.625C5.68333 20.625 1.375 16.3167 1.375 11C1.375 5.68333 5.68333 1.375 11 1.375C16.3167 1.375 20.625 5.68333 20.625 11C20.625 16.3167 16.3167 20.625 11 20.625ZM15.675 5.40833L8.89167 8.61667C8.75417 8.6625 8.61667 8.8 8.57083 8.9375L5.3625 15.7208C5.225 15.9958 5.27083 16.3167 5.5 16.5C5.6375 16.6375 5.82083 16.6833 6.00417 16.6833C6.09583 16.6833 6.1875 16.6833 6.27917 16.6375L13.0625 13.4292C13.2 13.3833 13.3375 13.2458 13.3833 13.1083L16.5917 6.325C16.7292 6.05 16.6833 5.72917 16.4542 5.54583C16.2708 5.31667 15.95 5.27083 15.675 5.40833ZM12.2833 12.2833L9.7625 9.7625L14.575 7.47083L12.2833 12.2833Z" fill={Theme.four} style={{ color: Theme.four }} />
              </g>
              <defs>
                <clipPath id="clip0_2058_123" style={{ color: Theme.four }}>
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="name-icon" style={{ color: Theme.four }}>
            Explore
          </div>
        </Link>

        <Link to="/home" className="icon" style={{ color: Theme.four }}>
          <div className="icon-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <g clip-path="url(#clip0_1_523)">
                <path d="M14.4375 12.925L9.30417 9.94583C9.075 9.80833 8.84583 9.80833 8.61667 9.94583C8.3875 10.0375 8.25 10.2667 8.25 10.5417V16.5C8.25 16.7292 8.3875 16.9583 8.61667 17.0958C8.70833 17.1417 8.84583 17.1875 8.9375 17.1875C9.075 17.1875 9.16667 17.1417 9.30417 17.0958L14.4375 14.1167C14.6667 13.9792 14.7583 13.75 14.7583 13.5208C14.7583 13.2917 14.6208 13.0625 14.4375 12.925ZM20.1208 1.83333C18.975 0.733333 17.6 0 14.5292 0H7.425C4.4 0 3.025 0.733333 1.83333 1.87917C0.733333 3.025 0 4.4 0 7.425V14.5292C0 17.5542 0.733333 18.975 1.87917 20.1208C3.025 21.2208 4.4 21.9542 7.47083 21.9542H14.575C17.6 21.9542 19.0208 21.2208 20.1667 20.075C21.2667 18.9292 22 17.5542 22 14.4833V7.425C22 4.4 21.2667 3.025 20.1208 1.83333ZM14.575 1.375C17.4625 1.375 18.425 2.10833 19.1583 2.84167C19.7083 3.39167 20.2125 4.07917 20.4875 5.5H16.225L13.8875 1.375H14.575ZM7.425 1.375H12.2375L14.575 5.5H9.075L6.7375 1.375H7.425ZM2.84167 2.84167C3.34583 2.3375 3.9875 1.83333 5.27083 1.55833L7.51667 5.5H1.5125C1.7875 4.07917 2.29167 3.39167 2.84167 2.84167ZM20.625 14.575C20.625 17.4625 19.8917 18.425 19.1583 19.1583C18.425 19.8917 17.4167 20.625 14.575 20.625H7.425C4.5375 20.625 3.575 19.8917 2.84167 19.1583C2.10833 18.425 1.375 17.4167 1.375 14.575V6.875H20.625V14.575Z" fill={Theme.four} />
              </g>
              <defs>
                <clipPath id="clip0_1_523">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="name-icon" style={{ color: Theme.four }}>
            Reels
          </div>
        </Link>

        <Link to="/direct" className="icon" style={{ color: Theme.four }}>
          <div className="icon-logo" style={{ color: Theme.four }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_1_539)">
                <path d="M18.1 8.35L14.5 11.1C14.25 11.3 13.9 11.3 13.65 11.1L10.95 9.1C10.15 8.5 9 8.7 8.45 9.55L5.05 14.9C4.7 15.4 5.35 16 5.85 15.65L9.5 12.9C9.75 12.7 10.1 12.7 10.35 12.9L13.05 14.9C13.85 15.5 15 15.3 15.55 14.45L18.95 9.1C19.25 8.55 18.6 8 18.1 8.35ZM12 0.5C5.5 0.5 0.5 5.25 0.5 11.65C0.5 15 1.85 17.9 4.1 19.9C4.3 20.05 4.4 20.3 4.4 20.55L4.5 22.6C4.5 23.1 4.95 23.5 5.4 23.5C5.5 23.5 5.65 23.5 5.75 23.4L8.05 22.4C8.15 22.35 8.3 22.3 8.4 22.3C8.5 22.3 8.55 22.3 8.65 22.35C9.7 22.65 10.8 22.8 12 22.8C18.5 22.8 23.5 18.05 23.5 11.65C23.5 5.25 18.5 0.5 12 0.5ZM12 21.3C11 21.3 10 21.15 9.05 20.9C8.85 20.85 8.65 20.8 8.4 20.8C8.05 20.8 7.75 20.85 7.4 21L5.9 21.65V20.5C5.9 19.85 5.6 19.25 5.1 18.8C3.1 17 2 14.45 2 11.65C2 6.15 6.3 2 12 2C17.7 2 22 6.15 22 11.65C22 17.15 17.7 21.3 12 21.3Z" fill={Theme.four} />
              </g>
              <defs>
                <clipPath id="clip0_1_539">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="name-icon">
            Messages
          </div>
        </Link>

        <Link to="/home" className="icon" style={{ color: Theme.four }}>
          <div className="icon-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <g clip-path="url(#clip0_1_526)">
                <path d="M15.8583 2.79578C18.4708 2.79578 20.625 5.17911 20.625 8.06661C20.625 11.1833 17.9208 13.1083 15.3542 15.3999C12.7875 17.6916 11.4583 18.9291 11 19.2041C10.4958 18.8833 8.84583 17.3708 6.64583 15.3999C4.03333 13.1083 1.375 11.1833 1.375 8.06661C1.375 5.17911 3.52917 2.79578 6.14167 2.79578C8.06667 2.79578 9.12083 3.71244 9.85417 4.76661C10.725 5.95828 10.8625 6.55411 11 6.55411C11.1375 6.55411 11.275 5.95828 12.1458 4.76661C12.8792 3.71244 13.9333 2.79578 15.8583 2.79578ZM15.8583 1.42078C13.7958 1.42078 12.2375 2.24578 11 3.98744C9.7625 2.29161 8.20417 1.46661 6.14167 1.46661C2.75 1.42078 0 4.39994 0 8.06661C0 11.4124 2.475 13.5666 4.85833 15.6291C5.13333 15.8583 5.45417 16.1333 5.72917 16.4083L6.78333 17.3249C8.8 19.1124 9.80833 20.0291 10.2667 20.3041C10.4958 20.4416 10.7708 20.5333 11 20.5333C11.275 20.5333 11.5042 20.4416 11.7333 20.3041C12.1917 20.0291 13.0167 19.2958 15.3083 17.1874L16.225 16.3624C16.5458 16.0874 16.8208 15.8124 17.1417 15.5833C19.5708 13.5666 22 11.4583 22 8.06661C22 4.39994 19.25 1.42078 15.8583 1.42078Z" fill={Theme.four} />
              </g>
              <defs>
                <clipPath id="clip0_1_526">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="name-icon" style={{ color: Theme.four }}>
            Notification
          </div>
        </Link>

        <div className="icon" style={{ color: Theme.four }} onClick={() => setModalOpen(true)}>
          <div className="icon-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <g clip-path="url(#clip0_1_529)">
                <path d="M14.575 22H7.425C4.4 22 3.025 21.2667 1.87917 20.1667C0.733333 18.975 0 17.6 0 14.575V7.425C0 4.4 0.733333 3.025 1.83333 1.87917C3.025 0.733333 4.4 0 7.425 0H14.575C17.6 0 18.975 0.733333 20.1208 1.83333C21.2667 3.025 22 4.4 22 7.425V14.575C22 17.6 21.2667 18.975 20.1667 20.1208C18.975 21.2667 17.6 22 14.575 22ZM7.425 1.375C4.58333 1.375 3.575 2.10833 2.79583 2.84167C2.10833 3.575 1.375 4.58333 1.375 7.425V14.575C1.375 17.4167 2.10833 18.425 2.84167 19.2042C3.575 19.9375 4.58333 20.625 7.425 20.625H14.575C17.4167 20.625 18.425 19.8917 19.2042 19.1583C19.9375 18.425 20.625 17.4167 20.625 14.575V7.425C20.625 4.58333 19.8917 3.575 19.1583 2.79583C18.425 2.10833 17.4167 1.375 14.575 1.375H7.425Z" fill={Theme.four} />
                <path d="M16.6373 11.6875H5.3623C4.99564 11.6875 4.6748 11.3667 4.6748 11C4.6748 10.6333 4.99564 10.3125 5.3623 10.3125H16.6373C17.004 10.3125 17.3248 10.6333 17.3248 11C17.3248 11.3667 17.004 11.6875 16.6373 11.6875Z" fill={Theme.four} />
                <path d="M11 17.325C10.6333 17.325 10.3125 17.0042 10.3125 16.6375V5.36255C10.3125 4.99588 10.6333 4.67505 11 4.67505C11.3667 4.67505 11.6875 4.99588 11.6875 5.36255V16.6375C11.6875 17.0042 11.3667 17.325 11 17.325Z" fill={Theme.four} />
              </g>
              <defs>
                <clipPath id="clip0_1_529">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="name-icon">
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
          </div>
        </div>

        <Link to="/profile" className="icon" style={{ color: Theme.four }}>
          <div className="icon-logo">
            <img src={Batool} alt='' />
          </div>
          <div className="name-icon" style={{ color: Theme.four }}>
            Batool Azzam
          </div>
        </Link>
        <div className="icon" style={{ color: Theme.four }} onClick={() => handleLogout()}>
          <div className="icon-logo" >
            <LogoutIcon />

          </div>
          <div className="name-icon">
            Log Out
          </div>
        </div>

        <Link to="/notifications" className="icon menu" style={{ color: Theme.four }}>
          <div className="icon-logo" style={{ color: Theme.four }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill={Theme.four}>
              <path d="M0 1H20" stroke={Theme.four} stroke-width="2" />
              <path d="M0 9H20" stroke={Theme.four} stroke-width="2" />
              <path d="M0 17H20" stroke={Theme.four} stroke-width="2" />
            </svg>
          </div>
          <div className="name-icon ">
            Menu
          </div>
        </Link>
      </div>
    </div>

  );
}
