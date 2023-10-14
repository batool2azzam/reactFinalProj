import React from "react";
import Leftbar from "../../Component/LeftBar";
import Gallary from "../../Component/Gallary";
import "./main.css"
import ThemeContext from '../../ThemeContext';
import { useContext } from 'react'
function Index() {
  const { Theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);

  return (
    <div className="explore" style={{ backgroundColor: Theme.main, color: Theme.secendary }}>
      <div className="left">
        <Leftbar />
      </div>
      <div className="right">
        <Gallary />
      </div>
    </div>
  );
}

export default Index;
