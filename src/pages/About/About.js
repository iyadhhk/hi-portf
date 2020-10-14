import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <div className='content-about'>
        <h1>Who I am.</h1>
        <p>I'm Iyadh Hakiri, a javascript developer</p>
      </div>

      <div className='card'>
        <div className='card-left'>
          <p className='black-text'>FULL</p>
          <p className='front-end'>FrontEnd</p>
          <p className='skill'>React</p>
          <p className='skill'>HTML</p>
          <p className='skill'>CSS</p>
          <p className='skill'>JAVASCRIPT</p>
        </div>
        <div className='card-right'>
          <p className='white-text'>STACK</p>
          <p className='back-end'>BackEnd</p>
          <p className='skill'>NodeJs</p>
          <p className='skill'>Express</p>
          <p className='skill'>MongoDB</p>
          <p className='skill'>MySQL</p>
          <p className='skill'>REST API</p>
        </div>
      </div>
    </div>
  );
};

export default About;
