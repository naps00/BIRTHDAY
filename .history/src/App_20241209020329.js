import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';

function App() {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  // เมื่อวีดีโอจบ ให้แสดง modal
  const handleVideoEnd = () => {
    setShowModal(true);
  };

  // เมื่อคลิกปุ่ม "พร้อมหรือยัง?" ให้ปิด modal และไปยังหน้าใหม่
  const closeModal = () => {
    setShowModal(false);
    history.push('/new-page'); // เปลี่ยนหน้าไปยัง /new-page
  };

  return (
    <Router>
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

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2>พร้อมหรือยัง?</h2>
            <button className="pulse" onClick={closeModal}>ปิด</button>
          </div>
        </div>
      )}

      <Switch>
        <Route path="/new-page" component={NewPage} />
      </Switch>
    </Router>
  );
}

// หน้าใหม่ที่จะแสดงข้อความ "สสสส" 
function NewPage() {
  return (
    <div className="new-page">
      <h1 className="center-text">สสสส</h1>
    </div>
  );
}

export default App;
