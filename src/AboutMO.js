import React from "react";
import "./AboutMO.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const AboutMO = ({ onClose }) => {
  return (
    <div className="about-mo">
      <div className="about-texts-mo">
        <img className="profile-mo" src="/img/profile.png"></img>
        <h1 className="name-mo">SHIN HYEWON</h1>
        <p className="desc-mo">
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
        <div className="links-mo">
          <Link to="/list">목차 보러가기</Link>
          <br />
          <Link to="/">본편 보러가기</Link>
        </div>
      </div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default AboutMO;
