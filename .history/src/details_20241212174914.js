import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable'; // นำเข้า useSwipeable
import './details.css';

function Details() {
  const images = [
    "https://img2.pic.in.th/pic/C14EEE1A-1C6E-4778-85B7-4833D53D43EB.jpeg",
    "https://img5.pic.in.th/file/secure-sv1/618E6171-BADE-42BC-A018-2EA60935F70F.jpeg",
    "https://img5.pic.in.th/file/secure-sv1/IMG_448429fe121e41b2f430.jpeg",
    "https://img5.pic.in.th/file/secure-sv1/IMG_64786800a538a371f8ae.jpeg",
    "https://img2.pic.in.th/pic/IMG_18254b9a0e0ef262515a.jpeg",
    "https://img2.pic.in.th/pic/IMG_750821c6a0b5848c84f8.jpeg",
    "https://img2.pic.in.th/pic/IMG_217360495c125ab56c81.jpeg",
    "https://img5.pic.in.th/file/secure-sv1/IMG_79057ffcc3e4b6cb96bc.jpeg",
    "https://img2.pic.in.th/pic/IMG_7834161695a4292d3799.jpeg",
    "https://img5.pic.in.th/file/secure-sv1/IMG_7833a600a5964cb97987.jpeg",
    "https://img5.pic.in.th/file/secure-sv1/IMG_7669dbd275c5d25b60ea.jpeg",
    "https://img2.pic.in.th/pic/IMG_791818c257fcaec84a84.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="details-page">
      <div className="header-text">
        <h1>HAPPY <br /> NAME DAY</h1>
      </div>

      <div className="card-stack" {...handlers}>
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="card"
        />
      </div>

      <div className="controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>

      {/* Audio Player */}
      <audio autoPlay loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Details;
