import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const {
    toggleSlideshowBtn,
    startSlideshow,
    setStartSlideshow,
  } = useGlobalContext();

  return (
    <nav className='navbar-container'>
      <div className='homepage-header'>
        <div onClick={() => setStartSlideshow(true)}>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
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
