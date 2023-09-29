import React, { useState } from "react";
import Caption from "./Caption";
import "./Caption.css";

function getRandomCaptionPosition() {
  const positions = ["top-left", "top-right", "bottom-left", "bottom-right"];
  return positions[Math.floor(Math.random() * positions.length)];
}

function ImageWithCaption({ src, title, year, tags, onTagClick, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [captionPosition, setCaptionPosition] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCaptionPosition(getRandomCaptionPosition());
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCaptionPosition(null);
  };

  const handleOpenOverlay = () => {
    onClick();
  };

  let positionStyles = {};

  switch (captionPosition) {
    case "top-left":
      positionStyles = { top: "0", left: "0" };
      break;
    case "top-right":
      positionStyles = { top: "0", right: "0" };
      break;
    case "bottom-left":
      positionStyles = { bottom: "0", left: "0" };
      break;
    case "bottom-right":
      positionStyles = { bottom: "0", right: "0" };
      break;
    default:
      break;
  }
  return (
    <div
      style={{ position: "relative", padding: "10px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <img
        src={src}
        style={{ width: "100%", height: "100%" }}
        onClick={handleOpenOverlay}
      />
      {isHovered && captionPosition && (
        <div style={{ ...positionStyles, position: "absolute", zIndex: "1" }}>
          <Caption
            title={title}
            year={year}
            tags={tags}
            isHovered={isHovered}
            onTagClick={onTagClick}
            onClick={handleOpenOverlay}
          />
        </div>
      )}
    </div>
  );
}

export default ImageWithCaption;
