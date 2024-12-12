import React, { useState } from 'react';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  // เมื่อวีดีโอจบ ให้แสดง modal
  const handleVideoEnd = () => {
    setShowModal(true);
  };

  // เมื่อคลิกปุ่ม "พร้อมหรือยัง?" ให้ปิด modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <div className="container">
        {/* วีดีโอทางซ้าย */}
        <div className="video-section">
          <video
            className="video-player"
            controls
            onEnded={handleVideoEnd}
          >
            <source
              src="https://www.w3schools.com/html/movie.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* เพิ่มอิโมจิที่วิ้ง */}
        <div className="emoji">🎂✨</div>
            
        {/* ข้อความทางขวา */}
        <div className="text-section">
          <h1>Welcome to Our Video</h1>
          <p>Watch the video and see the surprise!</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2>พร้อมหรือยัง?</h2>
            <button className="pulse" onClick={closeModal}>ปิด</button>
          </div>
        </div>
      )}
        </div>

  );
}

export default App;
