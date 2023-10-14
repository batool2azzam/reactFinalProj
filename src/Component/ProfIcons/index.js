import React from "react";
import "./main.css";
import ThemeContext from '../../ThemeContext';
import { useContext } from 'react'

const Index = () => {
  const { Theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);

  return (
    <div className="compound-component">
      <div className="compound-item ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill={Theme.four}
        >
          <g clip-path="url(#clip0_31_241)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.625 0.6875H1.375C1.00833 0.6875 0.6875 1.00833 0.6875 1.375V20.625C0.6875 20.9917 1.00833 21.3125 1.375 21.3125H20.625C20.9917 21.3125 21.3125 20.9917 21.3125 20.625V1.375C21.3125 1.00833 20.9917 0.6875 20.625 0.6875ZM2.0625 2.0625H7.10417V7.10417H2.0625V2.0625ZM2.0625 8.47917H7.10417V13.5208H2.0625V8.47917ZM7.10417 19.9375H2.0625V14.8958H7.10417V19.9375ZM13.5208 19.9375H8.47917V14.8958H13.5208V19.9375ZM13.5208 13.5208H8.47917V8.47917H13.5208V13.5208ZM13.5208 7.10417H8.47917V2.0625H13.5208V7.10417ZM19.9375 19.9375H14.8958V14.8958H19.9375V19.9375ZM19.9375 13.5208H14.8958V8.47917H19.9375V13.5208ZM19.9375 7.10417H14.8958V2.0625H19.9375V7.10417Z"
              fill={Theme.four}
            />
          </g>
          <defs>
            <clipPath id="clip0_31_241">
              <rect width="22" height="22" fill={Theme.four} />
            </clipPath>
          </defs>
        </svg>
        <span className="postt" style={{ color: Theme.four }}>POSTS</span>
      </div>
      <div className="compound-item ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <g clip-path="url(#clip0_31_234)">
            <path
              d="M19.9375 22C19.7542 22 19.5708 21.9083 19.4333 21.8167L11 13.2917L2.56667 21.8167C2.38333 22 2.0625 22.0917 1.83333 21.9542C1.55833 21.8625 1.375 21.5875 1.375 21.3125V0.6875C1.375 0.320833 1.69583 0 2.0625 0H19.9375C20.3042 0 20.625 0.320833 20.625 0.6875V21.3125C20.625 21.5875 20.4417 21.8625 20.2125 21.9542C20.1208 22 20.0292 22 19.9375 22ZM11 11.9167C11.3667 11.9167 11.7333 12.0542 12.0083 12.3292L19.25 19.6625V1.375H2.75V19.6625L9.99167 12.3292C10.2667 12.0542 10.6333 11.9167 11 11.9167Z"
              fill={Theme.four}
            />
          </g>
          <defs>
            <clipPath id="clip0_31_234">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span style={{ color: Theme.four }}>REELS</span>
      </div>
      <div className="compound-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <g clip-path="url(#clip0_31_243)">
            <path
              d="M19.0209 2.52082H13.9334C13.7042 2.52082 13.475 2.42915 13.2917 2.24582L11.4584 0.412488C11.1834 0.137488 10.7709 0.137488 10.4959 0.412488L8.66252 2.24582C8.47919 2.42915 8.25002 2.52082 8.02085 2.52082H2.97919C1.46669 2.52082 0.229187 3.75832 0.229187 5.27082V19.0208C0.229187 20.5333 1.46669 21.7708 2.97919 21.7708H19.0209C20.5334 21.7708 21.7709 20.5333 21.7709 19.0208V5.27082C21.7709 3.75832 20.5334 2.52082 19.0209 2.52082ZM5.54585 20.3958C5.27085 20.3958 5.04169 20.1208 5.08752 19.8458C5.40835 18.3792 6.69169 17.2792 8.20419 17.2792H13.7042C15.2625 17.2792 16.5459 18.3792 16.8209 19.8458C16.8667 20.1208 16.6375 20.3958 16.3625 20.3958H5.54585ZM20.3959 19.0208C20.3959 19.8 19.8 20.3958 19.0209 20.3958H18.7459C18.5167 20.3958 18.3334 20.2125 18.2875 19.9833C18.0125 17.6917 16.0875 15.9042 13.75 15.9042H8.25002C5.91252 15.9042 3.94169 17.6917 3.71252 19.9833C3.66669 20.2125 3.48335 20.3958 3.25419 20.3958H2.97919C2.20002 20.3958 1.60419 19.8 1.60419 19.0208V5.27082C1.60419 4.49165 2.20002 3.89582 2.97919 3.89582H8.06669C8.66252 3.89582 9.25835 3.66665 9.67085 3.20832L11 1.87915L12.3292 3.20832C12.7417 3.62082 13.3375 3.89582 13.9334 3.89582H19.0209C19.8 3.89582 20.3959 4.49165 20.3959 5.27082V19.0208ZM11 5.72915C8.57085 5.72915 6.60002 7.69999 6.60002 10.1292C6.60002 12.5583 8.57085 14.5292 11 14.5292C13.4292 14.5292 15.4 12.5583 15.4 10.1292C15.4 7.69999 13.4292 5.72915 11 5.72915ZM11 13.1083C9.35002 13.1083 7.97502 11.7792 7.97502 10.0833C7.97502 8.43332 9.30419 7.05832 11 7.05832C12.6959 7.05832 14.025 8.38749 14.025 10.0833C14.025 11.7333 12.65 13.1083 11 13.1083Z"
              fill={Theme.four}
            />
          </g>
          <defs>
            <clipPath id="clip0_31_243">
              <rect width="22" height="22" fill={Theme.four} />
            </clipPath>
          </defs>
        </svg>
        <span style={{ color: Theme.four }}>TAGGED</span>
      </div>
    </div >
  );
};

export default Index;