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
    크리스마스 기념으로 만든 팝콘 튀기기 사이트입니다. 팝콘을 다 튀기고 나면 어떤 결과가 우리를 기다릴까요?
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
    Fridge Cliche Mart는 2022년 작업한 책 ‘냉장고 클리셰 카탈로그’를 웹으로 이식한 형태의 작업입니다. 유저가 적극적으로 인터랙션할 수 있다는 점에서 책과 특성이 구분되는 웹에서, 책의 메인 아이디어를 그대로 이식했을 때 어떤 방식이 가능할까요?
    <span className="br-height">
      <br/>
    </span>
    ‘냉장고 클리셰 카탈로그’에서 유저 친화적인 방향으로 ‘인물’에 초점을 맞춰, 각 아이템의 캡션에 마우스를 hover하면 그 아이템의 소지자에 대한 정보가 나올 수 있도록 했습니다. 유저는 마음에 드는 인물을 쇼핑해서 직접 냉장고를 커스텀할 수 있습니다.
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
    ‘일산: 인 픽션’은 일산을 배경으로 하고 있거나, 일산을 로케이션으로 하고 있는 영화 상영전이라는 가상의 이벤트를 위한 포스터입니다.
    <span className="br-height">
      <br/>
    </span>
    일산은 1기 신도시로서 당시 시대가 새로운 형태의 도시에 기대하는 바를 품고 있습니다. 저는 그중에서도 당대가 ‘아파트’를 바라보는 방식을 일산이 적극적으로 반영하고 있다고 느껴 수집한 4개의 영화를 아파트의 형태로 정렬했습니다.
    </>
  ),
  additionalImages: [
  ]},

  {src: "/img/isc_website.gif",
  title: "정보문화학과 홈페이지",
  year: "2022",
  tags: ["website", "UX/UI"],
  id: "6",
  video: "n4YX-Qpb8LU",
  description: (
    <>
    정보문화학과 홈페이지 개편 당시 메인 화면 UI와 프론트엔드 개발로 참여했습니다. 기존 정보문화학과 홈페이지의 사용자 경험을 개선하고, 정보문화학에 관심을 가진 학생들을 주 타겟으로 메인 화면의 UI를 구성했습니다.
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
    저는 언제나 다이어리나 플래너에는 강제성이 필요하다고 생각해왔습니다. 특히 플래너는 인간 몸의 확장으로서 일종의 미디어처럼 기능해야 합니다. 나의 생각을 풀어놓되 적당한 제약으로 그것을 잘 갈무리할 수 있도록요.
    <span className="br-height">
      <br/>
    </span>
    루틴 플래너는 우리가 일상을 지켜나갈 수 있게 도와주는 ‘루틴’에 초점을 맞춘 플래너입니다. 내가 무엇을 하고 하지 않는지, 어떤 행동을 해야만 하고 어떤 행동을 할 때 기쁨과 성취감을 느끼는지를 기록하고 반추할 수 있게 합니다.
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
  tags: ["motion", "drawing"],
  id: "8",
  video: "",
  description: (
    <>
    내 여자친구가 좀비로 변했다면?! …이라는 아이디어에서 출발한 좀비 아포칼립스 핸드메이드 애니메이션입니다. 과연 주인공은 어떤 선택을 내릴까요?!
    <span className="br-height">
      <br/>
    </span>
    bgm: <a href = "https://www.youtube.com/watch?v=p9Ev6WtAciY">October Country - My Girlfriend is a Witch</a>
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
      <span className="br-height">
      <br/>
    </span>
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
    심너울 작가의 ‘경의중앙선에서 마주치다’ 단편을 리디자인했습니다. 경의중앙선의 노선도에서 메인 그래픽 요소를 따왔고, 내지 디자인에서는 구체시의 형식으로 소설 내용을 적극적으로 표현하려고 했습니다.
    <span className="br-height">
      <br/>
    </span>
    책에 사용된 사진 역시 활기차지만 어딘가 찝찝한 무드를 적극적으로 표현하기 위해 직접 촬영하고 후가공을 진행했습니다.
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
  title: "냉장고 클리셰 카탈로그",
  year: "2022",
  tags: ["graphic", "editorial"],
  id: "11",
  video: "",
  description: (
    <>
    영화평론가 듀나의 <a href = "http://www.djuna.kr/movies//cliches_0085.html">눈달린 냉장고</a>에 착안해, ‘눈달린 냉장고’ 샷이 등장하는 영화와 냉장고 속 아이템을 수집했습니다. 해당 아이템은 어느 영화에 나오는 것일까요? 어느 등장인물의 것일까요? 냉장고는 인물을 어떻게 대변할까요?
    <span className="br-height">
      <br/>
    </span>
    이러한 아이템과 영화를 수집한 후 싸구려 카탈로그의 형태로 책자를 만들었습니다. 중철제본, 아트지 120g로 의도한 무드를 살리고자 했습니다.
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
  title: "w@nder: 대학 문화생활 큐레이션 앱 프로덕트 디자인",
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
    "/img/wonderapp1.png",
    "/img/wonderapp2.png",
    "/img/wonderapp3.png",
    "/img/wonderapp4.png",
    "/img/wonderapp5.png",
    "/img/wonderapp6.png",
    "/img/wonderapp7.png",
    "/img/wonderapp8.png",
    "/img/wonderapp9.png",
    "/img/wonderapp10.png",
    "/img/wonderapp11.png",
    "/img/wonderapp12.png",
    "/img/wonderapp13.png",
  ]},

  {src: "/img/wonder.png",
  title: "w@nder: 대학 문화생활 큐레이션 앱 아이덴티티 디자인",
  year: "2022",
  tags: ["graphic", "identity", "motion"],
  id: "13",
  video: "",
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
    w@nder는 대학 내 이벤트의 수집과 홍보, 아카이빙이 비효율적인 방향으로 이루어지고 있다는 페인 포인트에서 시작한 서비스입니다. 해당 서비스 자체에 대한 내용은 UX/UI 태그에 있는 동 서비스 관련 정보에서 찾아보실 수 있습니다.
    <span className="br-height">
      <br/>
    </span>
    대학생을 타겟으로 하고 있고, 대학 이벤트라는 소규모 아마추어 이벤트를 다루고 있는 서비스의 특성을 살려 아기자기한 느낌을 강조했습니다. 또한 대학에서 다양한 경험을 통해 성장하는 학우들의 모습처럼 서비스 이미지의 주 키워드를 “탐험”으로 정했습니다. 베이스캠프, 마운틴 클라이밍, 쌍안경 등의 아기자기한 그래픽 요소로 서비스의 특성을 강조하고자 했습니다.
    </>
  ),
  additionalImages: [
    "/img/wonderir1.png",
    "/img/wonderir2.png",
    "/img/wonderir3.png",
    "/img/wonderir4.png",
    "/img/wonderir5.png",
    "/img/wonderir6.png",
    "/img/wonderir7.png",
    "/img/wonderir8.png",
    "/img/wonderir9.png",
    "/img/wonderir10.png",
    "/img/wonderir11.png",
    "/img/wonderir12.png",
    "/img/wonderir13.png",
    "/img/wonderir14.png",
    "/img/wonderir15.png",
    "/img/wonderir16.png",
    "/img/wonderir17.png",
    "/img/wonderir18.png",
  ]},

  {src: "/img/10size10text-01.png",
  title: "10 text 10 size: 여학교의 별",
  year: "2022",
  tags: ["editorial"],
  id: "12",
  video: "",
  description: (
    <>
    주제로부터 10개의 사이즈를 수집하는 편집디자인 작업이었습니다.
    <span className="br-height">
      <br/>
    </span>
    문화컨텐츠에서 사용되었거나 지금도 사용되는 편집디자인을 메인 테마로 10개의 텍스트와 사이즈를 작업해 진행했습니다.
    </>
  ),
  additionalImages: [
    "/img/10size10text-02.png",
    "/img/10size10text-03.png",
    "/img/10size10text-04.png",
    "/img/10size10text-05.png",
    "/img/10size10text-06.png",
    "/img/10size10text-07.png",
    "/img/10size10text-08.png",
    "/img/10size10text-09.png",
    "/img/10size10text-10.png",
    "/img/10size10text-11.png",
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