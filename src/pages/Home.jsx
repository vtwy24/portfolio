import React from 'react';

import '../styles/Home.css';
import TicTacToe from '../components/TicTacToe';
import meImage from '../assets/me.png';

export default function Home() {
  return (
    <>
    <h1>About Me</h1>
      <div className='profile'>
        <img src={meImage} alt="Me" className='meImage'/>
        <div className='profile-statement'>
        <h2>A little bit about me...</h2>
        <p>
          Hey! Please call me Vee, a London-based developer who likes to dabble
          a bit in everything. Check out my works in my Project section
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
