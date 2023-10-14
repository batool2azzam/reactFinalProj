import React from 'react'
import './main.css'
import { LiaFacebookMessenger } from 'react-icons/lia'
import { useContext } from 'react'
import ThemeContext from '../../ThemeContext';


const Index = () => {
  const { Theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);
  return (
    <div className='direct-right-side' style={{ color: Theme.four }}>
      <div className='message-icon' style={{ color: Theme.four, borderColor: Theme.four }}><LiaFacebookMessenger className='icon' style={{ color: Theme.four, borderColor: Theme.four }} /></div>
      <p className='p-messages' style={{ color: Theme.four }}>Your messages</p>
      <p className='p-send'>Send private photos and messages to a friend or group</p>
      <button className='send-action'>Send message</button>
    </div>
  )
}

export default Index