import './App.css';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  // ฟังก์ชันเมื่อวีดีโอจบ
  const handleVideoEnd = () => {
    setShowModal(true); // เปิด Modal เมื่อวีดีโอจบ
  };

  // ฟังก์ชันปิด Modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <div className="container">
        {/* ส่วนข้อความอยู่ฝั่งซ้าย */}
        <div className="text-section">
          <h1>ddddd</h1>
          <div className="image-section">
            <img src="your-image1-url.jpg" alt="image1" className="image" />
            <img src="your-image2-url.jpg" alt="image2" className="image" />
          </div>
        </div>

        {/* ส่วนวีดีโออยู่ฝั่งขวา */}
        <div className="video-section">
          <video
            src="https://v1.pinimg.com/videos/mc/720p/88/35/68/8835689cb912c0f43ad874eba05570e5.mp4"
            controls
            className="video-player"
            onEnded={handleVideoEnd} // เพิ่มการใช้งานฟังก์ชัน handleVideoEnd
          ></video>
        </div>
      </div>

      {/* Modal แสดงข้อความ */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2>พร้อมหรือยัง</h2>
            <button onClick={closeModal}>ปิด</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;