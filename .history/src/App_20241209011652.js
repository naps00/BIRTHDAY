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
            src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
            controls
            className="video-player"
            onEnded={handleVideoEnd} // เพิ่มการใช้งานฟังก์ชัน handleVideoEnd
          ></video>
        </div>
      </div>

      {/* Modal แสดงข้อความ */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Are you ready?</h2>
            <button onClick={closeModal}></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
