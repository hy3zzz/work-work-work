import React from "react";
import "./index.css";
import { useLocation } from "react-router-dom";

function NavBar({ allTags, selectedTag, onTagClick }) {
  const location = useLocation();

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <nav className="navbar-wrapper">
      <select
        className="navbar"
        value={selectedTag || "all"}
        onChange={(event) =>
          onTagClick(event.target.value === "all" ? null : event.target.value)
        }>
        <option value="all">what?</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <i className="material-icons navbar-icon">keyboard_arrow_down</i>
    </nav>
  );
}

export default NavBar;
