import React from 'react'
import './main.css'
import Batooll from '../../assest/Batool.JPG'
export default function index() {
    return (
        <div className="user">

            <div className="logoUser">
                <img src={Batooll} alt='bbb'/>

            </div>

            <div className="nameUser">
                <h4>batool_22</h4>
                <p>Batool Azzam</p>
            </div>

            <div className="followUser">
                <p>switch</p>
            </div>


        </div>
    )
}
