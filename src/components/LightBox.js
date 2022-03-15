import React from 'react';
import { useGlobalContext } from '../context';

const LightBox = ({ galleryImg, name }) => {
  const {
    isLigthboxGalleryOpen,
    setIsLigthboxGalleryOpen,
  } = useGlobalContext();
  console.log(galleryImg, name);

  return (
    <section className='lightbox-container'>
      <div className='inner-lightbox-container'>
        <button
          className='lightbox-close-btn'
          type='button'
          onClick={() => setIsLigthboxGalleryOpen(false)}
        >
          CLOSE
        </button>
        <img src={galleryImg} alt={name} className='lightbox-img' />
      </div>
    </section>
  );
};
export default LightBox;
