import runk from './IMG/Runk.webp';
import React from 'react';
import ImageSlider from './ImageSlider';
import './App.css';

const App = () => {
  const images = [
    //logo,
    'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1',
    'https://www.onlygfx.com/wp-content/uploads/2016/11/handprint-1-768x815.png',
      runk,
  ];

  return (
      <div className="App">
        <ImageSlider images={images} interval={3} />
      </div>
  );
};

export default App;



