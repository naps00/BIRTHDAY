import React, { useState, useEffect } from 'react';
import './details.css';

function Details() {
  const [isBlue, setIsBlue] = useState(true);

  // ฟังก์ชันเพื่อสลับสีพื้นหลังทุก 2 วินาที
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlue((prev) => !prev);
    }, 2000); // สลับทุก 2 วินาที

    return () => clearInterval(interval); // เคลียร์ interval เมื่อคอมโพเนนต์ถูก unmount
  }, []);

  return (
    <div className={`details-page ${isBlue ? 'blue' : 'pink'}`}>
      <div className="content">
        <h1>HAPPY NAME DAY ꒰⁺</h1>
      </div>
    </div>
  );
}

export default Details;
