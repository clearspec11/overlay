import logo from './logo.svg';
import runk from './IMG/Runk.webp';
import React from 'react';
import ImageSlider from './ImageSlider';
import './App.css';

const App = () => {
  const images = [
    //logo,
      'https://media.discordapp.net/attachments/217916439934402560/1178295375006810122/Pika.png?ex=6575a015&is=65632b15&hm=2368526a6c08926579fd32debeb70a938712db2b0b3cd3dae704e81108311a3b&=&format=webp&width=1662&height=935',
      'https://media.discordapp.net/attachments/217916439934402560/1178295375388495892/Shit.png?ex=6575a015&is=65632b15&hm=4a0d71fcf9eee779b11e88e0f0fd9a592c3b8a76cf2c0258c8cce709aa98efd6&=&format=webp&width=1662&height=935',
      'https://cdn.discordapp.com/attachments/217916439934402560/1178295375753379861/Shrek.png?ex=6575a015&is=65632b15&hm=e9d9612c164165559212222815dec0dfcba9b8ca0b7f345686ae82bead5d76ed&',
      'https://media.discordapp.net/attachments/217916439934402560/1178295376479014962/Swirl.png?ex=6575a015&is=65632b15&hm=f8b766f5f95566965e59a93a6c0136ac87f4547c6c9c633ff6494da13f6f69f7&=&format=webp&width=1662&height=935',
      'https://cdn.discordapp.com/attachments/217916439934402560/1178295376780984380/Checkerboard.png?ex=6575a015&is=65632b15&hm=96cda5d0d4d0d72b395a22e4c39d1dcdeaab929652e01c80c8ca9d53a3d39301&',
      'https://cdn.discordapp.com/attachments/217916439934402560/1178295377078796308/Donkey.png?ex=6575a015&is=65632b15&hm=8c2e0c5784f2ad74f3fd7c1851c83a533707ccb32a60d551b99ff5dfedb1b907&',
      'https://media.discordapp.net/attachments/217916439934402560/1178295377435316305/Link.png?ex=6575a015&is=65632b15&hm=57493a5b6e20a39f7243d405640de61c2b1c44102e7e0ce2cb11b13e880efd44&=&format=webp&width=1662&height=935',
      'https://media.discordapp.net/attachments/217916439934402560/1178295377825366046/Mario.png?ex=6575a015&is=65632b15&hm=3e5db34158e33fbbb7d0bfef48e58cf54b4510e05da9110c3c2e38006030a56b&=&format=webp&width=1662&height=935',

  ];

  return (
      <div className="App">
        <ImageSlider images={images} interval={3} />
      </div>
  );
};

export default App;



