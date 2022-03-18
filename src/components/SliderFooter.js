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
      <div className='line'>
        <div
          className={
            data.indexOf(currentSliderImage) < 5
              ? 'line1 '
              : data.indexOf(currentSliderImage) > 10
              ? 'line1-100'
              : 'line1-30'
          }
        ></div>
        <div
          className={
            data.indexOf(currentSliderImage) > 10 ? 'line2-100' : 'line2'
          }
        ></div>
      </div>
      <div className='footer-inner-container'>
        <div className='footer-name-container'>
          <h3>{name}</h3>
          <h4>{artistName}</h4>
        </div>
        {/* arrow buttons */}
        <div className='footer-arrows-container'>
          <button
            type='button'
            className='arrow-btn'
            disabled={data.indexOf(currentSliderImage) === 0}
          >
            <IoPlaySkipBackOutline
              onClick={rotateImagesDown}
              className={
                data.indexOf(currentSliderImage) === 0
                  ? 'arrow-down'
                  : 'arrow-down arrow-active'
              }
            />
          </button>
          <button
            type='button'
            className='arrow-btn'
            disabled={data.indexOf(currentSliderImage) === data.length - 1}
          >
            <IoPlaySkipForwardOutline
              onClick={rotateImagesUp}
              className={
                data.indexOf(currentSliderImage) === data.length - 1
                  ? 'arrow-up'
                  : 'arrow-up arrow-active'
              }
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default SliderFooter;
