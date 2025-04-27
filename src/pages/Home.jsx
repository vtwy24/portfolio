import React from 'react';

import '../styles/Home.css';
import TicTacToe from '../components/TicTacToe';
import meImage from '../assets/me.png';

export default function Home() {
  return (
    <>
    <h1 className='subtitle'>About Me</h1>
      <div className='profile'>
        <img src={meImage} alt="Me" className='meImage'/>
        <div className='profile-statement'>
        <h2>A little bit about me...</h2>
        <p>
          Hey! Please call me Vee, a London-based developer with a big love for creativity and growing passion for coding. Right now, I'm still building my collection of projects, but I'm always eager to learn, experiment and impove my skills. Feel free to follow me on my journey of coding and explore my works in my Projects section!
        </p>
        </div>
      </div>
<div>
      <div className="notepad">
        <TicTacToe />
      </div>
</div>
    </>
  );
}
