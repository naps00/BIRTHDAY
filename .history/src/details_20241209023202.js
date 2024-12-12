import React, { useEffect } from 'react';
import './Details.css';

function Details() {
  // ใช้ useEffect เพื่อเล่นเพลงเมื่อหน้าถูกโหลด
  useEffect(() => {
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audio.play(); // เล่นเพลงเมื่อเปิดหน้า
  }, []);

  return (
    <div className="details-page">
      {/* พื้นหลังเคลื่อนไหว */}
      <div className="background-animation"></div>

      {/* ข้อความ */}
      <div className="text-section">
        <h1>สสสส</h1>
      </div>

      {/* รูปภาพ */}
      <div className="image-section">
        <img
          src="https://via.placeholder.com/300"
          alt="Placeholder"
          className="image"
        />
      </div>
    </div>
  );
}

export default Details;
