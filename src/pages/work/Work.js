import React from 'react';
import './Work.css';
function work() {
  return (
    <div className='my-work'>
      <h1>My Projects.</h1>
      <div className='project'>
        <div className='item'>
          <img src='/about.jpg' alt='dd' />
        </div>
        <div className='item-info'>
          <p>Title :</p>
          <p>Description :</p>
          <p>Frontend :</p>
          <p>Backend :</p>
        </div>
      </div>
      <div className='project'>
        <div className='item'>
          <img src='/about.jpg' alt='dd' />
        </div>
        <div className='item-info'>
          <p>Title :</p>
          <p>Description :</p>
          <p>Frontend :</p>
          <p>Backend :</p>
        </div>
      </div>
    </div>
  );
}

export default work;
