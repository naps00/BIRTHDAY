import React, { useState } from 'react';
import './details.css'; // สไตล์สำหรับหน้า Details

function Details() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://pic.in.th/image/C14EEE1A-1C6E-4778-85B7-4833D53D43EB.mNc97c',
    'https://pic.in.th/image/618E6171-BADE-42BC-A018-2EA60935F70F.mNclap',
    'https://pic.in.th/image/IMG-4484.mNcOQ3',
    'https://pic.in.th/image/IMG-6478.mNce69',
    'https://pic.in.th/image/IMG-1825.mNcPmL',
    'https://pic.in.th/image/IMG-7508.mNcQya',
    'https://pic.in.th/image/IMG-2173.mNcCRN',
    'https://pic.in.th/image/IMG-7905.mNctvD',
    'https://pic.in.th/image/IMG-7834.mNc4lf',
    'https://pic.in.th/image/IMG-7833.mNcqrt',
    'https://pic.in.th/image/IMG-7669.mNcFLM',
    'https://pic.in.th/image/IMG-7918.mNcfNn'
  ];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

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
                width: '300px', // กำหนดขนาดของรูป
                height: '200px', // กำหนดขนาดของรูป
              }}
            />
          );
        })}
      </div>

      <div className="controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>

      {/* Audio Player (เพลงเล่นอัตโนมัติ) */}
      <audio autoPlay loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Details;
