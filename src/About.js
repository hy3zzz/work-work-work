import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = ({ setIsAboutExpanded }) => {
  const handleMouseEnter = () => {
    setIsAboutExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsAboutExpanded(false);
  };

  return (
    <div
      className="about"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="about-texts">
        <img className="profile" src="/img/profile.png"></img>

        <h1 className="name">Hyewon Shin</h1>
        <p className="desc">
          UX/UI를 공부하고 있습니다.
          <br />
          취미는 각종 대중문화 소비와 운동,
          <br />
          작고 쓸모없는 웹사이트를
          <br />
          만드는 것입니다.
          <br />
          인쇄가 무섭습니다.
        </p>
        <div className="links">
          <Link to="/list">목차 보러가기</Link>
          <br />
          <Link to="/">본편 보러가기</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
