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
        <a href="https://pic.in.th/image/C14EEE1A-1C6E-4778-85B7-4833D53D43EB.mNc97c">
          <img 
            src="https://img2.pic.in.th/pic/C14EEE1A-1C6E-4778-85B7-4833D53D43EB.jpeg" 
            alt="C14EEE1A 1C6E 4778 85B7 4833D53D43EB" 
            style={{ width: 'auto', height: 'auto' }}
          />
        </a>

        <a href="https://pic.in.th/image/618E6171-BADE-42BC-A018-2EA60935F70F.mNclap">
          <img 
            src="https://img5.pic.in.th/file/secure-sv1/618E6171-BADE-42BC-A018-2EA60935F70F.jpeg" 
            alt="618E6171 BADE 42BC A018 2EA60935F70F" 
            style={{ width: 'auto', height: 'auto' }}
          />
        </a>

        <a href="https://pic.in.th/image/IMG-4484.mNcOQ3">
          <img 
            src="https://img5.pic.in.th/file/secure-sv1/IMG_448429fe121e41b2f430.jpeg" 
            alt="IMG 4484" 
            style={{ width: 'auto', height: 'auto' }}
          />
        </a>

        <a href="https://pic.in.th/image/IMG-6478.mNce69">
          <img 
            src="https://img5.pic.in.th/file/secure-sv1/IMG_64786800a538a371f8ae.jpeg" 
            alt="IMG 6478" 
            style={{ width: 'auto', height: 'auto' }}
          />
        </a>

        <a href="https://pic.in.th/image/IMG-1825.mNcPmL">
          <img 
            src="https://img2.pic.in.th/pic/IMG_18254b9a0e0ef262515a.jpeg" 
            alt="IMG 1825" 
            style={{ width: 'auto', height: 'auto' }}
          />
        </a>

        <a href="https://pic.in.th/image/IMG-7508.mNcQya">
          <img 
            src="https://img2.pic.in.th/pic/IMG_750821c6a0b5848c84f8.jpeg" 
            alt="IMG 7508" 
            style={{ width: 'auto', height: 'auto' }}
          />
        </a>

        <a href="https://pic.in.th/image/IMG-2173.mNcCRN">
          <img 
            src="https://img2.pic.in.th/pic/IMG_217360495c125ab56c81.jpeg" 
            alt="IMG 2173" 
            style={{ width: 'auto', height: 'auto' }}
          />
        </a>

        <a href="https://pic.in.th/image/IMG-7905.mNctvD">
          <img 
            src="https://img5.pic.in.th/file/secure-sv1/IMG_79057ffcc3e4b6cb96bc.jpeg" 
            alt="IMG 7905" 
            style={{ width: 'auto', height: 'auto' }}
          />
        </a>

        <a href="https://pic.in.th/image/IMG-7834.mNc4lf">
          <img 
            src="https://img2.pic.in.th/pic/IMG_7834161695a4292d3799.jpeg" 
            alt="IMG 7834" 
            style={{ width: 'auto', height: 'auto' }}
          />
        </a>

        <a href="https://pic.in.th/image/IMG-7833.mNcqrt">
          <img 
            src="https://img5.pic.in.th/file/secure-sv1/IMG_7833a600a5964cb97987.jpeg" 
            alt="IMG 7833" 
            style={{ width: 'auto', height: 'auto' }}
          />
        </a>

        <a href="https://pic.in.th/image/IMG-7669.mNcFLM">
          <img 
            src="https://img5.pic.in.th/file/secure-sv1/IMG_7669dbd275c5d25b60ea.jpeg" 
            alt="IMG 7669" 
            style={{ width: 'auto', height: 'auto' }}
          />
        </a>

        <a href="https://pic.in.th/image/IMG-7918.mNcfNn">
          <img 
            src="https://img2.pic.in.th/pic/IMG_791818c257fcaec84a84.jpeg" 
            alt="IMG 7918" 
            style={{ width: 'auto', height: 'auto' }}
          />
        </a>
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
