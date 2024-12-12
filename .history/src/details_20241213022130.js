import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './details.css';
import videoFile from './bdPname.MP4';
import song from './one.mp3';

function Details() {
  const images = [
    "https://img5.pic.in.th/file/secure-sv1/IMG_7833a600a5964cb97987.jpeg",
    "https://img2.pic.in.th/pic/C14EEE1A-1C6E-4778-85B7-4833D53D43EB.jpeg",
    "https://img5.pic.in.th/file/secure-sv1/IMG_448429fe121e41b2f430.jpeg",
    "https://img5.pic.in.th/file/secure-sv1/IMG_64786800a538a371f8ae.jpeg",
    "https://img2.pic.in.th/pic/IMG_18254b9a0e0ef262515a.jpeg",
    "https://img2.pic.in.th/pic/IMG_750821c6a0b5848c84f8.jpeg",
    "https://img2.pic.in.th/pic/IMG_217360495c125ab56c81.jpeg",
    "https://img5.pic.in.th/file/secure-sv1/IMG_79057ffcc3e4b6cb96bc.jpeg",
    "https://img2.pic.in.th/pic/IMG_7834161695a4292d3799.jpeg",
    "https://img5.pic.in.th/file/secure-sv1/IMG_7669dbd275c5d25b60ea.jpeg",
    "https://img2.pic.in.th/pic/IMG_791818c257fcaec84a84.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="details-page" style={{ overflowY: 'auto', maxHeight: '100vh', padding: '20px' }}>
      {/* เล่นเพลงเบื้องหลัง */}
      <audio autoPlay loop>
        <source src={song} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="header-text" style={{ textAlign: 'center' }}>
        <h1>HAPPY°˖✧  <br /> NAME DAY♡</h1>
      </div>

      <div className="card-stack" {...handlers} style={{ position: 'relative', height: '350px', marginBottom: '20px' }}>
        {images.map((src, index) => {
          const zIndex = images.length - Math.abs(currentIndex - index);
          const rotation = (index - currentIndex) * 1;
          const offset = (index - currentIndex) * 0;

          return (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="card"
              style={{
                zIndex: zIndex,
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                marginTop: `${offset}px`,
                width: '250px',
                height: '350px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            />
          );
        })}
      </div>

      <div className="controls" style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={handlePrev} style={{ margin: '0 10px', padding: '10px 20px' }}>
          &lt;
        </button>
        <button onClick={handleNext} style={{ margin: '0 10px', padding: '10px 20px' }}>
          &gt;
        </button>
      </div>

      <div
        className="card-message"
       
      >
        <h2>สุขสันต์วันเกิดนะพี่เนม⭐️💖</h2>

<p>
  ในวันพิเศษของเธอปีนี้ อยากบอกว่าหนูดีใจและโชคดีมากๆ ที่ได้มีเธออยู่ข้างๆ 
  เธอคือคนสำคัญที่ทำให้ทุกวันของหนูมีความสุขและเต็มไปด้วยรอยยิ้ม
</p>

<p>
  ขอให้ปีนี้เป็นปีที่ดีสำหรับเธอ ขอให้สุขภาพแข็งแรง หัวใจเบิกบาน 
  มีเงินเยอะๆ และเต็มไปด้วยความสุขในทุกๆ วันนะ ขอให้ทุกความฝันของเธอเป็นจริง 
  และขอให้ทุกสิ่งที่เธอทำประสบความสำเร็จตามที่เธอปรารถนา
</p>

<p>
  รักเธอมากๆนะ และจะอยู่เคียงข้างเธอเสมอ ไม่ว่าเธอจะเจอกับเรื่องราวอะไร 
  หนูพร้อมจะเป็นกำลังใจและดูแลเธออย่างดี👍🏻 ขอแค่ไม่ดื้อก็พอ😌 อย่ากวนเยอะด้วย
</p>

<p>
วันนี้หนูอยากให้เธอยิ้มเยอะๆ หัวเราะดังๆ และมีความสุขที่สุดไปเลยนะ! หนูรักเธอที่สุดในโลกเลยน้าาา 💕✨
  สุขสันต์วันเกิดนะคนพิเศษของน้อง!😘
</p>
      </div>

      <video
        controls
        style={{
          margin: '10px auto',
          display: 'block',
          width: '300px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="heart-frame">
  <img src="your-image-url.jpg" alt="Image inside heart frame" />
</div>

      <div className="header-text" style={{ textAlign: 'center' }}>
        <h1>LOVE ♡</h1>
      </div>
      <div className="emoji">🌟</div>
      <div className="emoji2">✨</div>
      <div className="emoji3">🎀</div>
      <div className="emoji4">💕</div>
      <div className="emoji5">✨</div>
      <div className="emoji6">🌟</div>
      <div className="emoji7">🎀</div>
      <div className="emoji8">💕</div>
    </div>
    
  );
}


export default Details;
