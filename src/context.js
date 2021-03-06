import React, { useState, useContext } from 'react';
import { data } from './data';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [currentSliderImage, setCurrentSliderImage] = useState(data[0]);
  const [startSlideshow, setStartSlideshow] = useState(true);
  const [isLigthboxGalleryOpen, setIsLigthboxGalleryOpen] = useState(false);

  //take the name of the clicked image on the homepage; set the current slider image
  const handleSingleImage = (name) => {
    const image = data.find((i) => i.name === name);
    setCurrentSliderImage(image);
    setStartSlideshow(false);
  };

  //toggle the slideshow btn start slideshow/stop slideshow; when the navdar button is clicked and when the homepage image container is clicked
  const toggleSlideshowBtn = () => {
    setStartSlideshow(!startSlideshow);
  };

  //open LightBoxGallery when view image btn is clicked
  const openLightbox = () => {
    setIsLigthboxGalleryOpen(true);
  };
  return (
    <AppContext.Provider
      value={{
        handleSingleImage,
        currentSliderImage,
        setCurrentSliderImage,
        toggleSlideshowBtn,
        startSlideshow,
        setStartSlideshow,
        openLightbox,
        isLigthboxGalleryOpen,
        setIsLigthboxGalleryOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
// import { useGlobalContext } from './context'
// const { openSidebar, openModal } = useGlobalContext();
