import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* ส่วนวีดีโอ */}
        <div className="video-section">
          <video
            src="your-video-url.mp4"
            controls
            className="video-player"
          ></video>
        </div>

        {/* ส่วนข้อความ */}
        <div className="text-section">
          <h1>ddddd</h1>
        </div>
      </div>

      {/* ส่วนรูปภาพ */}
      <div className="image-section">
        <img src="your-image1-url.jpg" alt="image1" className="image" />
        <img src="your-image2-url.jpg" alt="image2" className="image" />
      </div>
    </div>
  );
}

export default App;
