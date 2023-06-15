import React from 'react';
import './About.css';

function About() {
  return (
    <div className = "about">
      <div className = "title-wrapper">
        <div className = "name-wrapper">
          <h1 className = "namekr">신혜원</h1>
          <h2 className = "nameen">Shin Hyewon</h2>
        </div>

        <div className = "major-wrapper">
          <h3 className = "majorkr">서울대학교 디자인과 시각디자인전공 & 연합전공 정보문화학</h3>
          <h3 className = "majoren"><br></br><br></br><br></br>Majoring in <i>visual communication design & information science and culture</i> in SNU</h3>
        </div>
      </div>

      <div className = "des-wrapper">
        <p className = "deskr">
          <br></br>미디어와 인간의 상호작용, 그리고 데이터를 활용한 디자인에 관심이 많습니다.
          <br></br>프로덕트 디자인을 중점적으로 공부하며 시각디자인의 여러 분야를 탐구하고 있습니다.
        </p>
        <p className = "desen">
          <br></br>I am interested in interaction between media and human, and data-driven design.
          <br></br>Now I am focusing on product design, exploring various fields of visual communication design.
        </p>
      </div>
    </div>
  );
}

export default About;