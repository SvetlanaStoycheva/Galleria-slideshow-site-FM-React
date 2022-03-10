import React from 'react';
import { data } from './data';

const homePage = () => {
  return (
    <div className='main'>
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
};

export default homePage;
