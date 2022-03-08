import React from 'react';
import logo from './assets/shared/logo.svg';
import { data } from './data';

function App() {
  return (
    <div className='main'>
      <div className='homepage-header'>
        <img src={logo} alt='logo' />
        <p className='start-slideshow'>start slideshow</p>
      </div>
      <div className='homepage-line'></div>
      <section className='gallery-container'>
        {data.map((item, index) => {
          const {
            name,
            artist: { name: artistName },
            images: { gallery: galleryImage },
          } = item;

          return (
            <div className='single-gallery-image-container' key={index}>
              <img
                className='homepage-gallery-image'
                src={`${galleryImage}`}
                alt={name}
              />
              <div className='single-gallery-image-text'>
                <h1>{name}</h1>
                <h3>{artistName}</h3>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
