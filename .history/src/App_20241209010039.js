import './App.css';

function App() {
  return (
    <div className="App">
      {/* ส่วนวีดีโอแบบเต็มจอ */}
      <div className="video-section">
        <video
          src="your-video-url.mp4"
          controls
          className="video-player"
        ></video>
      </div>

      {/* ส่วนข้อความและรูปภาพ */}
      <div className="content-section">
        <h1>ddddd</h1>
        <div className="image-section">
          <img src="your-image1-url.jpg" alt="image1" className="image" />
          <img src="your-image2-url.jpg" alt="image2" className="image" />
        </div>
      </div>
    </div>
  );
}

export default App;
