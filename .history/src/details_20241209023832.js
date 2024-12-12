// src/pages/details.js
import React, { useState } from 'react';
import './details.css'; // ใช้ไฟล์ CSS สำหรับการสไตล์

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
    <div className="details-container">
      {/* ภาพสไลด์ */}
      <div className="slider-container">
        <div className="image-stack">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`image ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        {/* ปุ่มสไลด์ */}
        <div className="controls">
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>

      {/* ข้อความที่ด้านบนของหน้า */}
      <div className="text-section">
        <h1>สสสส</h1>
      </div>
    </div>
  );
}

export default Details;
