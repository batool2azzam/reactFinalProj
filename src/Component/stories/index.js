import React from 'react';
import Story from '../Story';
import './main.css';
// import BatoolImage from '../../assest/Batool.JPG'; 
import p1 from '../../assest/StoryAv/Ellipse 4.jpg'; 
import p2 from '../../assest/StoryAv/Ellipse 5.jpg'; 
import p3 from '../../assest/StoryAv/Ellipse 25.jpg'; 
import p4 from '../../assest/StoryAv/Ellipse 19.jpg'; 
import p5 from '../../assest/StoryAv/Ellipse 20.jpg'; 
import p6 from '../../assest/StoryAv/Ellipse 22.jpg'; 
import p7 from '../../assest/StoryAv/Ellipse 24.jpg'; 

const stories = [
  {
    id: 1,
    userName: 'baraa_sa',
    image: p1, 
  },
  {
    id: 2,
    userName: 'yara.98',
    image: p2,
  },
  {
    id: 3,
    userName: 'suhaib',
    image: p3,
  },
  {
    id: 4,
    userName: 'rana22',
    image: p4,
  },
  {
    id: 5,
    userName: 'saryabd',
    image: p5,
  },
  {
    id: 6,
    userName: 'zaina.ab',
    image: p6,
  },{
    id: 7,
    userName: 'lona.sh',
    image: p7,
  },
];

const Stories = () => {
  return (
    <div className='stories'>
      {stories.map(s => (
        <Story props={s} key={s.id} />
      ))}
    </div>
  );
};

export default Stories;
