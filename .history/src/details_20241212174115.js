import React from 'react';
import './details.css'; // สไตล์สำหรับหน้า Details

function Details() {
  return (
    <div className="details-page">
      <div className="header-text">
        <h1>HAPPY
        <br /> NAME DAY
        </h1>
      </div>

      <div className="card-stack">
        <img
          src="https://pic.in.th/image/C14EEE1A-1C6E-4778-85B7-4833D53D43EB.mNc97c"
          alt="Happy Birthday Decoration"
          style={{ width: 'auto', height: 'auto' }}
        />
        <img
          src="https://pic.in.th/image/618E6171-BADE-42BC-A018-2EA60935F70F.mNclap"
          alt="Birthday Cake"
          style={{ width: 'auto', height: 'auto' }}
        />
        <img
          src="https://pic.in.th/image/IMG-4484.mNcOQ3"
          alt="Decoration Item"
          style={{ width: 'auto', height: 'auto' }}
        />
        <img
          src="https://pic.in.th/image/IMG-6478.mNce69"
          alt="Party Decoration"
          style={{ width: 'auto', height: 'auto' }}
        />
        <img
          src="https://pic.in.th/image/IMG-1825.mNcPmL"
          alt="Balloon Decoration"
          style={{ width: 'auto', height: 'auto' }}
        />
        <img
          src="https://pic.in.th/image/IMG-7508.mNcQya"
          alt="Party Banner"
          style={{ width: 'auto', height: 'auto' }}
        />
        <img
          src="https://pic.in.th/image/IMG-2173.mNcCRN"
          alt="Cake Decoration"
          style={{ width: 'auto', height: 'auto' }}
        />
        <img
          src="https://pic.in.th/image/IMG-7905.mNctvD"
          alt="Birthday Balloons"
          style={{ width: 'auto', height: 'auto' }}
        />
        <img
          src="https://pic.in.th/image/IMG-7834.mNc4lf"
          alt="Happy Birthday"
          style={{ width: 'auto', height: 'auto' }}
        />
        <img
          src="https://pic.in.th/image/IMG-7833.mNcqrt"
          alt="Cake"
          style={{ width: 'auto', height: 'auto' }}
        />
        <img
          src="https://pic.in.th/image/IMG-7669.mNcFLM"
          alt="Candles"
          style={{ width: 'auto', height: 'auto' }}
        />
        <img
          src="https://pic.in.th/image/IMG-7918.mNcfNn"
          alt="Birthday Party"
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      <div className="controls">
        <button>&lt;</button>
        <button>&gt;</button>
      </div>

      {/* Audio Player (เพลงเล่นอัตโนมัติ) */}
      <audio autoPlay loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Details;
