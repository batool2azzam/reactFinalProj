import React from 'react'
import Leftbar from "../../Component/LeftBar"
import CenterDirect from "../../Component/CenterDirect"
import RigthDirect from "../../Component/RigthDirect"
import './main.css'
import { useContext } from 'react'
import ThemeContext from '../../ThemeContext';


function Index() {
  const { Theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);

  return (

    <div className="direct" style={{ backgroundColor: Theme.main, color: Theme.secendary }}>
      <div className="leftbarDirect">

        <Leftbar className="leftDir" />

      </div>

      <div className="CenterDirect">

        <CenterDirect/>

      </div>

      <div className="RigthDirect">

      <RigthDirect/>

      </div>

    </div>

  )
}

export default Index