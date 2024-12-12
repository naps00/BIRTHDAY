import React, { useState } from 'react';
import './details.css'; // เพิ่มสไตล์สำหรับ Card Stack

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

  return (
    <div className="details-page">
      <div className="text-section">
        <h1>NAME DAY</h1>
      </div>

      <div className="card-stack">
        {images.map((src, index) => {
          const isActive = index === currentIndex;
          const zIndex = images.length - Math.abs(currentIndex - index); // ลำดับของการซ้อน
          const offsetX = (index - currentIndex) * 20; // ความเหลื่อมในแกน X
          const offsetY = (index - currentIndex) * 10; // ความเหลื่อมในแกน Y
          const rotation = (index - currentIndex) * 5; // หมุนเล็กน้อย

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
                transition: 'transform 0.5s ease-in-out, z-index 0.5s',
              }}
            />
          );
        })}
      </div>

      <div className="controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
}

export default Details;