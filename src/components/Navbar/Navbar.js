import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  console.log(props);
  return (
    <Fragment>
      <nav className='navbar'>
        <ul className='nav'>
          <li>
            <Link to='/'>
              <span className={props.location.pathname === '/' ? 'active' : ''}>
                <i class='fas fa-laptop-code'></i>
              </span>
            </Link>
          </li>
          <li>
            <Link to='/work'>
              <span className={props.location.pathname === '/work' ? 'active' : ''}>
                Work
              </span>
            </Link>
          </li>
          <li>
            <Link to='/contact-me'>
              <span className={props.location.pathname === '/contact-me' ? 'active' : ''}>
                Say Hello
              </span>
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <span className={props.location.pathname === '/about' ? 'active' : ''}>
                About
              </span>
            </Link>
          </li>
        </ul>

        <ul className='nav-right'>
          <li>
            <a
              href='https://www.linkedin.com/in/iyadh-hakiri-83b5b31a1/'
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fab fa-linkedin-in'></i>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/iyadhhk'
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fab fa-github'></i>
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default withRouter(Navbar);
