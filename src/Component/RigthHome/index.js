// index.jsx
import React from 'react';
import './main.css';
import User from '../User';
import UserLess from '../UserLess';
import l2 from "../../assest/Avatars/nurse.png"
import l3 from "../../assest/Avatars/shop-assistant.png"
import l4 from "../../assest/Avatars/cock-man.png"
import l5 from "../../assest/Avatars/singer.png"
import l6 from "../../assest/Avatars/steward.png"
import ThemeContext from '../../ThemeContext';
import { useContext } from 'react'
export default function Index() {
    const { Theme } = useContext(ThemeContext);
    return (
        <div className="rightHome">
            <User />
            <div className="titleRight">
                <p className="suggestion">Suggestion for you</p>
                <p>see more</p>
            </div>

            <UserLess
                image={l2}
                username="sujood_abbas"
                follower="followed by nora"
            />
            <UserLess
                image={l3}
                username="sereen_kh"
                follower="followed by reham"
            />
            <UserLess
                image={l4}
                username="malik_asaad"
                follower="followed by sereen"
            />
            <UserLess
                image={l5}
                username="alaa_1997"
                follower="followed by ahmad"
            />
            <UserLess
                image={l6}
                username="ahmad_moh"
                follower="followed by reham"
            />

            <div className="footerRight" style={{ color: Theme.four }}>
                <p>About . Help . Press . API . Jobs . Privacy . Terms. Locations . Language . Meta Verified</p>
                <p className="ss">@ 2023 INSTAGRAM FROM META</p>
            </div>
        </div>
    );
}
