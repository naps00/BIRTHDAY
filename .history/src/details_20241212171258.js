<div className="details-page">
  {/* ส่วนข้อความด้านบน */}
  <div className="header-text">
    <h1>
      HAPPY
      <br /> NAME DAY
    </h1>
  </div>

  {/* ส่วนรูปภาพด้านล่าง */}
  <div className="card-container">
    <div className="card-stack">
      {images.map((src, index) => {
        const isActive = index === currentIndex;
        const zIndex = images.length - Math.abs(currentIndex - index);
        const offsetX = (index - currentIndex) * 15;
        const offsetY = (index - currentIndex) * 10;
        const rotation = (index - currentIndex) * 3;

        return (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`card ${isActive ? 'active' : ''}`}
            style={{
              zIndex: zIndex,
              transform: `translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg) scale(${isActive ? 1.1 : 1})`,
              position: 'absolute',
              left: '50%',
              top: '50%',
              transformOrigin: 'center',
              marginLeft: '-150px',
              marginTop: '-100px',
            }}
          />
        );
      })}
    </div>

    <div className="controls">
      <button onClick={handlePrev}>&lt;</button>
      <button onClick={handleNext}>&gt;</button>
    </div>
  </div>
</div>
