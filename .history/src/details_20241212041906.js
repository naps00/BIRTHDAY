import React, { useState, useEffect } from 'react';
import './details.css';

function DetailsPage() {
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
        <h1>
          HAPPY <br />
          NAME DAY ꒰⁺
        </h1>
      </div>
      
      <div className="card-stack">
        {/* ใส่ภาพที่ต้องการ */}
        <img src="https://via.placeholder.com/150" alt="card" className="card card1" />
        <img src="https://via.placeholder.com/150" alt="card" className="card card2" />
        <img src="https://via.placeholder.com/150" alt="card" className="card card3" />
      </div>
    </div>
  );
}

export default DetailsPage;
