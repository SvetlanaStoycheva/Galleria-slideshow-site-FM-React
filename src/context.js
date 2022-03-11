import React, { useState, useContext } from 'react';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [currentImage, setCurrentImage] = useState('Starry Night');
  const [startSlideshow, setStartSlideshow] = useState(true);

  //take the name of the clicked image
  const handleSingleImage = (e) => {
    const currentName = e.target.alt;
    setCurrentImage(currentName);
    // setStartSlideshow(false);
  };

  //toggle the slideshow btn start slideshow/stop slideshow; when the navdar button is clicked and when the homepage image container is clicked
  const toggleSlideshowBtn = () => {
    setStartSlideshow(!startSlideshow);
  };
  return (
    <AppContext.Provider
      value={{
        handleSingleImage,
        currentImage,
        toggleSlideshowBtn,
        startSlideshow,
        setStartSlideshow,
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
