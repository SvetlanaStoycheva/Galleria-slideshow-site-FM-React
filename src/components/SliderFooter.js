import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import { data } from '../data';
import {
  IoPlaySkipForwardOutline,
  IoPlaySkipBackOutline,
} from 'react-icons/io5';

const SliderFooter = () => {
  const { currentSliderImage, setCurrentSliderImage } = useGlobalContext();

  const {
    name,
    artist: { name: artistName },
  } = currentSliderImage;

  //
  const rotateImagesDown = () => {
    const index = data.indexOf(currentSliderImage);
    setCurrentSliderImage(
      currentSliderImage === data[0] ? data[data.length - 1] : data[index - 1]
    );
  };
  const rotateImagesUp = () => {
    const index = data.indexOf(currentSliderImage);
    setCurrentSliderImage(
      currentSliderImage === data[data.length - 1] ? data[0] : data[index + 1]
    );
  };

  return (
    <footer className='footer-container'>
      <div className='footer-name-container'>
        <h3>{name}</h3>
        <h4>{artistName}</h4>
      </div>
      <div className='footer-arrows-container'>
        <span>
          <IoPlaySkipBackOutline onClick={rotateImagesDown} />
        </span>
        <span>
          <IoPlaySkipForwardOutline onClick={rotateImagesUp} />
        </span>
      </div>
    </footer>
  );
};

export default SliderFooter;
