import React from "react";
import "./main.css";
import Leftbar from "../../Component/LeftBar";
import Bio from "../../Component/Bio";
import ProfIcons from "../../Component/ProfIcons";
import Gallary from "../../Component/Gallary";
import ThemeContext from '../../ThemeContext';
import { useContext } from 'react'

export const Index = () => {
  const { Theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);

  return (
    <div className="profile" style={{ backgroundColor: Theme.main, color: Theme.secendary }}>
      <div className="left_prof">
        <Leftbar />
      </div>

      <div className="center_prof">
        <div className="header" style={{ backgroundColor: Theme.main, color: Theme.secendary }}>
          <div className="Bio" >
            <Bio />
          </div>
        </div>
        <div className="ProfIcons">
          <ProfIcons />
        </div>
        <div className="Gallary">
          <Gallary />
        </div>
      </div>
    </div>
  );
};
export default Index;
