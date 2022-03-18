import React from 'react';
import SliderFooter from '../components/SliderFooter';
import { useGlobalContext } from '../context';
import { FaSith } from 'react-icons/fa';
import LightboxGallery from '../components/LightBox';

function SliderPage() {
  const {
    currentSliderImage,
    openLightbox,
    isLigthboxGalleryOpen,
  } = useGlobalContext();

  const {
    name,
    artist: { image: artistImage, name: artistName },
    description,
    images: {
      gallery: galleryImg,
      // hero: { small: smallImg, large: largeImg },
      // thumbnail: tumbImg,
    },
    source,
    year,
  } = currentSliderImage;

  return (
    <>
      {isLigthboxGalleryOpen && (
        <LightboxGallery galleryImg={galleryImg} name={name} />
      )}
      <section className='slider-container'>
        {/* image */}
        <article className='slider-image-container'>
          <img className='gallery-img' src={galleryImg} alt={name} />
          <button className='view-image-btn' onClick={openLightbox}>
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
          <button className='source-btn'>
            <a
              href={source}
              target='_blank'
              rel='noreferrer'
              className='source-btn-link'
            >
              go to source
            </a>
          </button>
        </article>
      </section>
      <SliderFooter />
    </>
  );
}

export default SliderPage;
