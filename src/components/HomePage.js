import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data';
import { useGlobalContext } from '../context';

const HomePage = () => {
  const { handleSingleImage } = useGlobalContext();
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
              <Link to='/slider' onClick={() => handleSingleImage(name)}>
                <img
                  className='homepage-gallery-image'
                  src={`${galleryImage}`}
                  alt={name}
                />

                <div className='single-gallery-image-text'>
                  <h1>{name}</h1>
                  <h3>{artistName}</h3>
                </div>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default HomePage;
