import React, { useState, useEffect } from 'react';
import { data } from '../data';
import SliderFooter from '../components/SliderFooter';
import { useGlobalContext } from '../context';

function SliderPage() {
  const { currentImage } = useGlobalContext();
  const [activeImage, setActiveImage] = useState(data[0]);
  // console.log(currentImage);
  const image = data.find((i) => i.name === currentImage);

  //
  useEffect(() => {
    setActiveImage(image);
  }, []);
  const {
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
        <article className='slider-image-container'>
          <div className='slider-big-image-container'>
            <img src={} alt='' />
          </div>
        </article>
        <article className='slider-info-container'></article>
      </section>
      <SliderFooter />
    </>
  );
}

export default SliderPage;
