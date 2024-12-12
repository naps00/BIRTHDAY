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
        <div className="text-section">
          <h1>HAPPY BIRTHDAY !!</h1>
          <p>MY LOVE </p>
        </div>

        <div className="video-section">
          <video
            className="video-player"
            controls
            onEnded={handleVideoEnd}
          >
            <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2>พร้อมหรือยัง?</h2>
            {/* เปลี่ยนปุ่ม "ปิด" ให้เป็นลิงค์ไปยังหน้า /details */}
            <Link to="/details">
              <button className="pulse">ปิด</button>
            </Link>
          </div>
        </div>
      )}

      {/* เพิ่มอิโมจิที่วิ้งๆ */}
      <div className="emoji">✨</div>
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
