import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
const Landing = () => {
  return (
    <div className='main'>
      <h1>Hi, I'm Iyadh.</h1>
      <p>I'm a fullstack javaScript developer.</p>
      <div className='input-container'>
        <Link to='/work'>
          <input id='work' type='button' value='SEE WORK' />
        </Link>
        <Link to='/contact-me'>
          <input type='button' value='GET IN TOUCH' />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
