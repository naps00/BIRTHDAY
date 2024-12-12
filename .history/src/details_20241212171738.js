import React, { useState, useEffect } from 'react';
import './details.css'; // สไตล์สำหรับหน้า Details

function Details() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://via.placeholder.com/300x200?text=Image+1',
    'https://via.placeholder.com/300x200?text=Image+2',
    'https://via.placeholder.com/300x200?text=Image+3',
    'https://via.placeholder.com/300x200?text=Image+4'
  ];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Auto-Play Carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="details-page">
      {/* ข้อความด้านบน */}
      <div className="header-text">
        <h1>HAPPY
        <br /> NAME DAY 
        </h1>
      </div>

      <div className="card-stack">
        {images.map((src, index) => {
          const isActive = index === currentIndex;
          const zIndex = images.length - Math.abs(currentIndex - index); // จัดลำดับการซ้อน
          const offsetX = (index - currentIndex) * 15; // ความเหลื่อมในแกน X
          const offsetY = (index - currentIndex) * 10; // ความเหลื่อมในแกน Y
          const rotation = (index - currentIndex) * 3; // การหมุนแบบเล็กน้อย

          return (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`card ${isActive ? 'active' : ''}`}
              style={{
                zIndex: zIndex,
                transform: `translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg) scale(${isActive ? 1.1 : 1})`,
                position: 'absolute',
                left: '50%',
                top: '50%',
                transformOrigin: 'center',
                marginLeft: '-150px', // ครึ่งหนึ่งของความกว้าง
                marginTop: '-100px', // ครึ่งหนึ่งของความสูง
              }}
            />
          );
        })}
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
