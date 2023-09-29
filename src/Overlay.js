import React from "react";
import "./Overlay.css";
import { tagColors } from "./tagColors";

function Overlay({ image, onClose }) {
  if (!image) {
    return null;
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="overlay-content"
        onClick={(event) => event.stopPropagation()}>
        <button className="overlay-close-button" onClick={onClose}>
          닫기
        </button>
        <div className="overlay-content-wrapper">
          <div className="overlay-text">
            <h2 className="overlay-title">{image.title}</h2>
            <h3 className="overlay-year">{image.year}</h3>
            {image.tags &&
              image.tags.map((tag, index) => (
                <span
                  key={index}
                  className="overlay-tag"
                  style={{ backgroundColor: tagColors[tag] }}>
                  {tag}
                </span>
              ))}
            <p>{image.description}</p>
          </div>

          <div className="overlay-image">
            <img src={image.src} alt={image.title} />
          </div>
        </div>
        <div className="additional">
          {image.video && (
            <iframe
              width="960"
              height="540"
              src={`https://www.youtube.com/embed/${image.video}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="yVideo"></iframe>
          )}
          {image.additionalImages.map((additionalImage, index) => (
            <img
              key={index}
              src={additionalImage}
              alt={`Additional Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overlay;
