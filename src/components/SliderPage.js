import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data';
import SliderFooter from '../components/SliderFooter';
import { useGlobalContext } from '../context';
import { FaSith } from 'react-icons/fa';

function SliderPage() {
  const { currentImage } = useGlobalContext();
  const [activeImage, setActiveImage] = useState(data[0]);
  const image = data.find((i) => i.name === currentImage);

  //
  useEffect(() => {
    setActiveImage(image);
  }, []);
  const {
    name,
    artist: { image: artistImage, name: artistName },
    description,
    images: {
      gallery: galleryImg,
      hero: { small: smallImg, large: largeImg },
      thumbnail: tumbImg,
    },
    source,
    year,
  } = activeImage;

  return (
    <>
      <section className='slider-container'>
        {/* image */}
        <article className='slider-image-container'>
          <img className='gallery-img' src={galleryImg} alt={name} />
          <button className='view-image-btn'>
            <span className='view-image-btn-icon'>
              <FaSith />
            </span>
            <p>view image</p>
          </button>
          <div className='gallery-name-container'>
            <h1>{name}</h1>
            <h3>{artistName}</h3>
          </div>
          <img className='artist-img' src={artistImage} alt={artistName} />
        </article>
        {/* info */}
        <article className='slider-info-container'>
          <div className='text-container'>
            <p className='display slider-year'>{year}</p>
            <p className='gallery-text'>{description}</p>
          </div>

          {/* <Link to={source}> */}
          <button className='source-btn'>
            <a
              href={source}
              target='_blank'
              rel='noopener'
              className='source-btn-link'
            >
              go to source
            </a>
          </button>
          {/* </Link> */}
        </article>
      </section>
      <SliderFooter />
    </>
  );
}

export default SliderPage;
