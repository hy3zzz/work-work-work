import React, { useState } from "react";
import "./ListItemView.css";
// ListItemView.js
const ListItemView = ({ item, index, onClick }) => {
  const [showImage, setShowImage] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setShowImage(true);
  };

  const handleMouseLeave = () => {
    setShowImage(false);
  };

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div className="list-item" onClick={onClick} onMouseMove={handleMouseMove}>
      <div
        className="list-item-title"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <p>{item.title}</p>
      </div>
      <div className="list-item-tags">
        <p>{item.tags.join(", ")}</p>
      </div>
      <div className="list-item-year">
        <p>{item.year}</p>
      </div>
      {showImage && (
        <img
          src={item.src}
          alt={item.title}
          className="preview-image"
          style={{
            top: `${mousePosition.y}px`,
            left: `${mousePosition.x}px`,
          }}
        />
      )}
    </div>
  );
};

export default ListItemView;
