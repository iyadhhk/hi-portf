import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div className='contact'>
      <div className='text-lead'>
        <p className='text-top'>Want to</p>
        <p className='text-middle'>
          Start a <span className='high-text'>New Project</span>
        </p>
        <p className='text-middle'>
          or just say <span className='high-text'>Hello</span>
        </p>
        <p className='low-text'>Email: iyadhbox@gmail.com</p>
      </div>
      <div className='contact-form'>
        <p className='title-black'>Contact Me</p>

        <div className='form-group'>
          <label>YOUR NAME :</label>
          <input className='about-input' type='text' placeholder='fullname' />
        </div>
        <div className='form-group'>
          <label>YOUR EMAIL :</label>
          <input className='about-input' type='text' placeholder='exemple@email.com' />
        </div>
        <div className='form-group-text'>
          <label>YOUR MESSAGE</label>
          <textarea name='message' placeholder='message'></textarea>
        </div>
        <input className='submit-input' type='submit' value='SEND MESSAGE' />
      </div>
    </div>
  );
};

export default Contact;
