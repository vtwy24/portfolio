import React from 'react';

import './Home.css';
import TicTacToe from '../components/TicTacToe';
import meImage from '../assets/me.png';

export default function Home() {
  return (
    <>
      <div className='profile'>
        <img src={meImage} alt="Me" className='meImage'/>
        <div className='profile-statement'>
        <h1>A little bit about me...</h1>
        <p>
          Hey! Please call me Vee, a London-based developer who likes to dabble
          a bit in everything. Check out my works in my Project section
        </p>
        </div>
      </div>

      <div className="notepad">
        <TicTacToe />
      </div>
    </>
  );
}
