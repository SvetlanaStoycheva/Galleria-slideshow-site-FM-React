import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/shared/logo.svg';

const Navbar = () => {
  const [startSlideshow, setStartSlideshow] = useState(true);

  const toggleSlideshowBtn = () => {
    setStartSlideshow(!startSlideshow);
  };

  return (
    <nav className='navbar-container'>
      <div className='homepage-header'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>

        <button
          type='button'
          className='start-slideshow-btn'
          onClick={toggleSlideshowBtn}
        >
          {startSlideshow ? (
            <Link className='start-slideshow' to='./slider'>
              start slideshow
            </Link>
          ) : (
            <Link className='start-slideshow' to='./'>
              stop slideshow
            </Link>
          )}
        </button>
      </div>
      <div className='homepage-line'></div>
    </nav>
  );
};

export default Navbar;
