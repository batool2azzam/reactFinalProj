import React from 'react'
import './main.css'
import { useContext } from 'react'
import ThemeContext from '../../ThemeContext';
const Story = ({ props }) => {
  const { Theme } = useContext(ThemeContext);

  return (
    <div className='story-item'>
      <div className='gradient' >
        <img src={props.image} alt='bb' style={{ borderColor: Theme.main }} />
      </div>
      <p>{props.userName}</p>
    </div>
  )
}

export default Story;