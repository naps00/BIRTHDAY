import React, { useState, useEffect } from 'react';
import './details.css';

function DetailsPage() {
  const [isBlue, setIsBlue] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://via.placeholder.com/150?text=Card+1',
    'https://via.placeholder.com/150?text=Card+2',
    'https://via.placeholder.com/150?text=Card+3',
  ];

  // ฟังก์ชันเพื่อสลับสีพื้นหลังทุก 2 วินาที
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlue((prev) => !prev);
    }, 2000); // สลับทุก 2 วินาที

    return () => clearInterval(interval); // เคลียร์ interval เมื่อคอมโพเนนต์ถูก unmount
  }, []);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={`details-page ${isBlue ? 'blue' : 'pink'}`}>
      <div className="content">
        <h1>
          HAPPY <br />
          NAME DAY ꒰⁺
        </h1>
      </div>

      <div className="card-stack">
        <img
          src={images[currentIndex]}
          alt="card"
          className="card"
        />
      </div>

      <div className="controls">
        <button onClick={handlePrev}>&lt; Prev</button>
        <button onClick={handleNext}>Next &gt;</button>
      </div>
    </div>
  );
}

export default DetailsPage;
