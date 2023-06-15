import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Caption.css';
import { tagColors } from './tagColors';

function Caption({ title, year, tags, isHovered, onTagClick }) {
  return (
    <CSSTransition
      in={isHovered}
      timeout={300}
      classNames="caption-ani"
      unmountOnExit
    >
      <div className="caption">
        <h3 className="caption-title">{title}</h3>
        <p className="caption-year">{year}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span style={{ backgroundColor: tagColors[tag] }} key={index} className="caption-tag" onClick={(event) => {
              event.stopPropagation();
              onTagClick(tag);
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </CSSTransition>
  );
}

export default Caption;
