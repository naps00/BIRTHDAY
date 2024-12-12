import React, { useState } from "react";
import "./details.css";

function Details() {
  const images = [
    "https://img2.pic.in.th/pic/C14EEE1A-1C6E-4778-85B7-4833D53D43EB.jpeg",
    "https://img5.pic.in.th/file/secure-sv1/618E6171-BADE-42BC-A018-2EA60935F70F.jpeg",
    "https://img5.pic.in.th/file/secure-sv1/IMG_448429fe121e41b2f430.jpeg",
    "https://img5.pic.in.th/file/secure-sv1/IMG_64786800a538a371f8ae.jpeg",
    "https://img2.pic.in.th/pic/IMG_18254b9a0e0ef262515a.jpeg",
  ];

  return (
    <div className="details-page">
      <div className="header-text">
        <h1>HAPPY <br /> NAME DAY</h1>
      </div>

      <div className="card-stack">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="card"
          />
        ))}
      </div>

      <div className="text-box">
        <p>
          This is a space for your personalized message. Write your heartfelt
          wishes or a memorable note here.
        </p>
      </div>
    </div>
  );
}

export default Details;
