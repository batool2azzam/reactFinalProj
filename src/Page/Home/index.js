import React from 'react'
import './main.css'
import Leftbar from '../../Component/LeftBar';
import RigthHome from '../../Component/RigthHome';
import CenterHome from '../../Component/CenterHome';
import ThemeContext from '../../ThemeContext';
import { useContext } from 'react'

function Index() {
    const { Theme } = useContext(ThemeContext);
    return (
        <div className="homee" style={{ backgroundColor: Theme.main, color: Theme.secendary }}>
            <div className="left-home" >
                <Leftbar />

            </div>

            <div className="center-home" >
                <CenterHome />

            </div>

            <div className="rigth-home" >
                <RigthHome />

            </div>
        </div >

    )
}

export default Index;
