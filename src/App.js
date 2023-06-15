import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import './App.css';
import './Overlay.css';
import ImageWithCaption from './ImageWithCaption'; 
import NavBar from './NavBar';
import About from './About';
import Overlay from './Overlay';
import FixedImage from './FixedImage';
import FixedImage2 from './FixedImage2';
import shuffleArray from './shuffleArray';

const imagesData = [
  {src: "/img/new_isc.png",
  title: 'new_ISC="ITCT(20th)"',
  year: "2022",
  tags: ["graphic", "identity"],
  id: "1",
  video: "",
  description: (
    <>
    서울대학교 연합전공 정보문화학과 20주년 홈커밍 행사와 2022년도 2학기 정보문화학 과제전 아이덴티티 디자인을 진행했습니다.
    <br />20주년이라는 시간의 유동성을 공간에서 포착해낼 수 있으리라는 아이디어 하에 정보문화학과 강의실과 교수님들 연구실이 존재하는 학교 건물(83동, 64동)과 행사가 진행되는 68동의 조형적 특성을 주 그래픽 요소로 삼았습니다.
    </>
  ),
  additionalImages: [
    "/img/new_isc_1.png",
    "/img/new_isc_2.png",
    "/img/new_isc_3.png",
    "/img/new_isc_4.png",
    "/img/new_isc_5.png",
    "/img/new_isc_6.png",
    "/img/new_isc_7.png",
  ]},

  {src: "/img/makecornpop.gif",
  title: "Make Corn Pop!",
  year: "2022",
  tags: ["website"],
  id: "2",
  video: "n5If5jaoq5s",
  description: (
    <>
    서울대학교 연합전공 정보문화학과 20주년 홈커밍 행사와 2022년도 2학기 정보문화학 과제전 아이덴티티 디자인을 진행했습니다.
    <span className="br-height">
      <br/>
    </span>
    20주년이라는 시간의 유동성을 공간에서 포착해낼 수 있으리라는 아이디어 하에 정보문화학과 강의실과 교수님들 연구실이 존재하는 학교 건물(83동, 64동)과 행사가 진행되는 68동의 조형적 특성을 주 그래픽 요소로 삼았습니다.
    </>
  ),
  additionalImages: [
  ]},

  {src: "/img/getrelaxed.gif",
  title: "Refresh and Get Your Own Landscape",
  year: "2022",
  tags: ["website"],
  id: "3",
  video: "",
  description: (
    <>
    p5.js를 이용해 만든 멍 때리기 용 사이트입니다.
    <span className="br-height">
      <br/>
    </span>
    심신이 고될 때 들어가서 가만히 바라보는 시간을 가지세요.
    </>
  ),
  additionalImages: [
  ]},

  {src: "/img/fcm.gif",
  title: "Fridge Cliche Mart",
  year: "2023",
  tags: ["graphic", "website"],
  id: "4",
  video: "",
  description: (
    <>
    p5.js를 이용해 만든 멍 때리기 용 사이트입니다.
    <span className="br-height">
      <br/>
    </span>
    심신이 고될 때 들어가서 가만히 바라보는 시간을 가지세요.
    </>
  ),
  additionalImages: [
  ]},

  {src: "/img/finilsan.gif",
  title: "일산: 인 픽션",
  year: "2021",
  tags: ["graphic", "motion"],
  id: "5",
  video: "",
  description: (
    <>
    정보문화학과 홈페이지 개편 당시 메인 화면 UI로 참여했습니다. 기존 정보문화학과 홈페이지의 사용자 경험을 개선하고, 정보문화학에 관심을 가진 학생들을 주 타겟으로 메인 화면의 UI를 구성했습니다.
    <span className="br-height">
      <br/>
    </span>
    기존 정보문화학과의 컬러를 극대화하는 동시에, 학과의 정체성을 메인 화면에서 체험할 수 있도록 모션을 적극적으로 활용했습니다.
    </>
  ),
  additionalImages: [
  ]},

  {src: "/img/isc_website.gif",
  title: "정보문화학과 홈페이지",
  year: "2022",
  tags: ["website"],
  id: "6",
  video: "n4YX-Qpb8LU",
  description: (
    <>
    정보문화학과 홈페이지 개편 당시 메인 화면 UI로 참여했습니다. 기존 정보문화학과 홈페이지의 사용자 경험을 개선하고, 정보문화학에 관심을 가진 학생들을 주 타겟으로 메인 화면의 UI를 구성했습니다.
    <span className="br-height">
      <br/>
    </span>
    기존 정보문화학과의 컬러를 극대화하는 동시에, 학과의 정체성을 메인 화면에서 체험할 수 있도록 모션을 적극적으로 활용했습니다.
    </>
  ),
  additionalImages: [
  ]},

  {src: "/img/planner.png",
  title: "루틴 플래너",
  year: "2022",
  tags: ["editorial"],
  id: "7",
  video: "",
  description: (
    <>
    정보문화학과 홈페이지 개편 당시 메인 화면 UI로 참여했습니다. 기존 정보문화학과 홈페이지의 사용자 경험을 개선하고, 정보문화학에 관심을 가진 학생들을 주 타겟으로 메인 화면의 UI를 구성했습니다.
    <span className="br-height">
      <br/>
    </span>
    기존 정보문화학과의 컬러를 극대화하는 동시에, 학과의 정체성을 메인 화면에서 체험할 수 있도록 모션을 적극적으로 활용했습니다.
    </>
  ),
  additionalImages: [
    "/img/planner_1.png",
    "/img/planner_2.png",
    "/img/planner_3.png",
    "/img/planner_4.png",
    "/img/planner_5.png",
  ]},

  {src: "/img/iloveyoumelisa.gif",
  title: "사랑해, 멜리사",
  year: "2021",
  tags: ["motion"],
  id: "8",
  video: "",
  description: (
    <>
    정보문화학과 홈페이지 개편 당시 메인 화면 UI로 참여했습니다. 기존 정보문화학과 홈페이지의 사용자 경험을 개선하고, 정보문화학에 관심을 가진 학생들을 주 타겟으로 메인 화면의 UI를 구성했습니다.
    <span className="br-height">
      <br/>
    </span>
    기존 정보문화학과의 컬러를 극대화하는 동시에, 학과의 정체성을 메인 화면에서 체험할 수 있도록 모션을 적극적으로 활용했습니다.
    </>
  ),
  additionalImages: [
  ]},

  {src: "/img/whatsinmybag.gif",
  title: "What's in Hyezzz's Bag?",
  year: "2022",
  tags: ["website"],
  id: "9",
  video: "",
  description: (
    <>
      혜원이의 가방에는 무엇이 들어있을까요?
      <br />
      <a href = "https://hy3zzz.github.io/What-s-in-Hyezzz-s-Bag/">https://hy3zzz.github.io/What-s-in-Hyezzz-s-Bag/</a>
    </>
  ),
  additionalImages: [
  ]},

  {src: "/img/gyeongui.png",
  title: "경의중앙선에서 마주치다",
  year: "2021",
  tags: ["editorial"],
  id: "10",
  video: "",
  description: (
    <>
    정보문화학과 홈페이지 개편 당시 메인 화면 UI로 참여했습니다. 기존 정보문화학과 홈페이지의 사용자 경험을 개선하고, 정보문화학에 관심을 가진 학생들을 주 타겟으로 메인 화면의 UI를 구성했습니다.
    <span className="br-height">
      <br/>
    </span>
    기존 정보문화학과의 컬러를 극대화하는 동시에, 학과의 정체성을 메인 화면에서 체험할 수 있도록 모션을 적극적으로 활용했습니다.
    </>
  ),
  additionalImages: [
    "/img/gyeongui1.gif",
    "/img/gyeongui2.gif",
    "/img/gyeongui3.gif",
    "/img/gyeongui4.gif",
    "/img/gyeongui5.gif"
  ]},

  {src: "/img/fcc.png",
  title: "Fridge Cliche Catalog",
  year: "2022",
  tags: ["editorial"],
  id: "11",
  video: "",
  description: (
    <>
    서울대학교 연합전공 정보문화학과 20주년 홈커밍 행사와 2022년도 2학기 정보문화학 과제전 아이덴티티 디자인을 진행했습니다.
    <br />20주년이라는 시간의 유동성을 공간에서 포착해낼 수 있으리라는 아이디어 하에 정보문화학과 강의실과 교수님들 연구실이 존재하는 학교 건물(83동, 64동)과 행사가 진행되는 68동의 조형적 특성을 주 그래픽 요소로 삼았습니다.
    </>
  ),
  additionalImages: [
    "/img/fcc_1.png",
    "/img/fcc_2.png",
    "/img/fcc_3.png",
    "/img/fcc_4.png",
    "/img/fcc_5.png",
    "/img/fcc_6.png",
    "/img/fcc_7.png",
    "/img/fcc_8.png",
  ]},


  {src: "/img/wonderapp.gif",
  title: "w@nder: 대학 문화생활 큐레이션 앱",
  year: "2022",
  tags: ["UX/UI"],
  id: "12",
  video: "82_zrIAqHGY",
  description: (
    <>
      기획. 강승지, 성다은
      <span className="br-height">
      <br/>
    </span>
      개발. 박준영
      <span className="br-height">
      <br/>
    </span>
      디자인. 신혜원
      <span className="br-height">
      <br/>
    </span>
    <span className="br-height">
      <br/>
    </span>
    서울대학교 사회과학대학 우덕 크리에이터 공모전, 경영대학 벤처경영학 SNUBIZ 창업경진대회 우수상을 수상한 프로젝트입니다.
    <span className="br-height">
      <br/>
    </span>
    w@nder는 대학 내 이벤트의 수집과 홍보, 아카이빙이 비효율적인 방향으로 이루어지고 있다는 페인 포인트에서 시작한 서비스입니다. 시장 리서치와 유저 인터뷰 및 분석, 페르소나 도출 후 MVP 설계를 위한 워크플로우와 와이어프레임 디자인까지 전 과정에 관여했습니다.
    <span className="br-height">
      <br/>
    </span>
    현재 내부 알파 테스트 진행 중으로 2023년 6월 말 베타 테스트, 8월 정식 배포 예정입니다.
    </>
  ),
  additionalImages: [
    "/img/fcc_1.png",
    "/img/fcc_2.png",
    "/img/fcc_3.png",
    "/img/fcc_4.png",
    "/img/fcc_5.png",
    "/img/fcc_6.png",
    "/img/fcc_7.png",
    "/img/fcc_8.png",
  ]},
];

function App() {
  const allTags = [...new Set(imagesData.flatMap(image => image.tags))];
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleImageClick = (image) => {
    setIsOverlayOpen(true);
    setSelectedImage(image);
  };
  
  const handleOverlayClose = () => {
    setIsOverlayOpen(false);
    setSelectedImage(null);
  };
  

  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const [images, setImages] = useState(imagesData);
  const [filteredImages, setFilteredImages] = useState([]);

  // shuffle images only once when the component is mounted
  useEffect(() => {
    const shuffledImages = shuffleArray([...images]); 
    setImages(shuffledImages);
  }, []);

  // filter shuffled images whenever selected tag changes
  useEffect(() => {
    const newFilteredImages = selectedTag
      ? images.filter((image) => image.tags.includes(selectedTag))
      : images;
    
    setFilteredImages(newFilteredImages);
  }, [selectedTag, images]);

  const Gallery = () => (
    <Masonry
      breakpointCols={{
        default: 3,
        1100: 3,
        700: 2,
        500: 1
      }}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {filteredImages.map((image) => (
        <ImageWithCaption
          key={image.id}
          src={image.src}
          title={image.title}
          year={image.year}
          tags={image.tags}
          onTagClick={handleTagClick}
          onClick={() => handleImageClick(image)}
        />
      ))}
    </Masonry>
  );

return (
  <div style={{ backgroundColor: isOverlayOpen ? 'black' : 'white' }}>
  <Router>
    <NavBar
      allTags={allTags}
      selectedTag={selectedTag}
      onTagClick={handleTagClick} />
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/about" element={<About />} />
    </Routes>
    {selectedImage && (
      <Overlay
        image={selectedImage}
        onClose={handleOverlayClose}
      />
    )}
    <FixedImage src="/img/bubble.png" />
    <FixedImage2 src="/img/bubble2.png" />
  </Router>
  </div>
);
}

export default App;