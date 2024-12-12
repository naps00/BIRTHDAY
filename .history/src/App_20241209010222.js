import './App.css';

function App() {
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
            src="your-video-url.mp4"
            controls
            className="video-player"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default App;
