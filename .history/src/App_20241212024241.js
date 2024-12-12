import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Details from './details.js'; // นำเข้า Details.js

function Home() {
  const [showModal, setShowModal] = useState(false);

  // เมื่อวีดีโอจบ ให้แสดง modal
  const handleVideoEnd = () => {
    setShowModal(true);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="text-section" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100vh', color: 'black', fontSize: 'calc(3vw + 0vh)', fontWeight: 'bold' }}>
          <h2>HAPPY BIRTHDAY !!</h2>
          <p>MY LOVE ♡ </p>
          <img src="https://img2.pic.in.th/pic/fc8c0bdfae313c2ffd700a21b05915d6-removebg-preview.png" alt="Happy Birthday Decoration" style={{width: '200px', height: '200PX' }} />
        </div>

        <div className="video-section">
          <video
            className="video-player"
            controls
            onEnded={handleVideoEnd}
          >
            <source src="https://v1.pinimg.com/videos/mc/720p/3d/2a/3c/3d2a3ca4078af4f14258938781ed5f8e.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2>Are you ready?</h2>
            {/* เปลี่ยนปุ่ม "ปิด" ให้เป็นลิงค์ไปยังหน้า /details */}
            <Link to="/details">
              <button className="pulse">GO !!</button>
            </Link>
          </div>
        </div>
      )}

      {/* เพิ่มอิโมจิที่วิ้งๆ */}
      <div className="emoji">✧</div>
      <div className="emoji2">✨</div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} /> {/* เพิ่มเส้นทางสำหรับหน้า /details */}
      </Routes>
    </Router>
  );
}

export default App;
