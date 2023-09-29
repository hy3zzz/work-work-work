import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Masonry from "react-masonry-css";
import "./App.css";
import "./Overlay.css";
import ImageWithCaption from "./ImageWithCaption";
import NavBar from "./NavBar";
import Overlay from "./Overlay";
import shuffleArray from "./shuffleArray";

const imagesData = [
  {
    src: "/img/new_isc.png",
    title: 'new_ISC="ITCT(20th)"',
    year: "2022",
    tags: ["graphic", "identity"],
    id: "1",
    video: "",
    description: (
      <>
        I was in charge of the identity design for the 20th Anniversary
        Homecoming event of the Seoul National University's Interdisciplinary
        Major in Information Science and Culture and the Information Culture
        Academic Exhibition for the fall semester of 2022.
        <span className="br-height">
          <br />
        </span>
        Inspired by the idea of capturing the fluidity of the 20-year time span
        within space, I utilized the architectural features of the buildings
        housing the department's classrooms and professors' offices (Building
        83, 64) and the event venue (Building 68) as the primary graphic
        elements.
        {/* 서울대학교 연합전공 정보문화학과 20주년 홈커밍 행사와 2022년도 2학기
        정보문화학 과제전 아이덴티티 디자인을 진행했습니다.
        <br />
        20주년이라는 시간의 유동성을 공간에서 포착해낼 수 있으리라는 아이디어
        하에 정보문화학과 강의실과 교수님들 연구실이 존재하는 학교 건물(83동,
        64동)과 행사가 진행되는 68동의 조형적 특성을 주 그래픽 요소로
        삼았습니다. */}
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
    ],
  },

  {
    src: "/img/makecornpop.png",
    title: "Make Corn Pop!",
    year: "2022",
    tags: ["website"],
    id: "2",
    video: "_X4QuGAV7yg",
    description: (
      <>
        This is a simple website I created for Christmas. When a user clicks, a
        popping sound feedback is provided, creating a simple interaction that
        builds anticipation towards what result will emerge when the last
        popcorn pops.
        {/* 크리스마스 기념으로 만든 팝콘 튀기기 사이트입니다. 팝콘을 다 튀기고 나면
        어떤 결과가 우리를 기다릴까요? */}
      </>
    ),
    additionalImages: ["/img/makecornpop1.png", "/img/makecornpop2.png"],
  },

  {
    src: "/img/getrelaxed.gif",
    title: "Refresh and Get Your Own Landscape",
    year: "2022",
    tags: ["website"],
    id: "3",
    video: "IsLzH6tetXA",
    description: (
      <>
        This is a site created using p5.js for spacing out.
        <span className="br-height">
          <br />
        </span>
        Visit when you are stressed or tired, and take some time to quietly
        contemplate.
      </>
    ),
    additionalImages: [],
  },

  {
    src: "/img/fcm.png",
    title: "Fridge Cliché Mart",
    year: "2023",
    tags: ["graphic", "website"],
    id: "4",
    video: "",
    description: (
      <>
        {/* <a href="https://github.com/hy3zzz/Fridge-Cliche-Mart">source code</a>
        <span className="br-height">
          <br />
        </span>
        Fridge Cliche Mart는 2022년 작업한 책 ‘냉장고 클리셰 카탈로그’를 웹으로
        이식한 형태의 작업입니다. 유저가 적극적으로 인터랙션할 수 있다는 점에서
        책과 특성이 구분되는 웹에서, 책의 메인 아이디어를 그대로 이식했을 때
        어떤 방식이 가능할까요?
        <span className="br-height">
          <br />
        </span>
        ‘냉장고 클리셰 카탈로그’에서 유저 친화적인 방향으로 ‘인물’에 초점을
        맞춰, 각 아이템의 캡션에 마우스를 hover하면 그 아이템의 소지자에 대한
        정보가 나올 수 있도록 했습니다. 유저는 마음에 드는 인물을 쇼핑해서 직접
        냉장고를 커스텀할 수 있습니다. */}
        Following the catalog, I embarked on a project to transplant the book
        idea onto the web. The idea was to create a seamless user experience
        where readers could browse through the catalog, then log onto the web
        and purchase the items (representing characters or the movie) from the
        online shop.
        <span className="br-height">
          <br />
        </span>
        In this process, I created a dynamic website utilizing simple
        interactions unique to the web. For instance, when a user hovers over
        the price tag, a description of the item's owner is displayed.
        <span className="br-height">
          <br />
        </span>
        After making a purchase, users are directed to a screen where they can
        customize their own fridge, by controlling items’ size and position.
      </>
    ),
    additionalImages: [
      "/img/fcm1.png",
      "/img/fcm2.png",
      "/img/fcm3.png",
      "/img/fcm4.png",
      "/img/fcm5.png",
    ],
  },

  {
    src: "/img/finilsan.gif",
    title: "Ilsan in Fiction",
    year: "2021",
    tags: ["graphic", "motion"],
    id: "5",
    video: "",
    description: (
      <>
        Ilsan is a region in Goyang city, Gyeonggi Province. In an effort to
        prevent infrastructure concentration in Seoul, it was promoted to a
        first-generation new city in the early 90s.
        <span className="br-height">
          <br />
        </span>
        I curated a virtual film exhibition to commemorate the 30th anniversary,
        collecting four films that either used Ilsan as a filming location or
        set the narrative backdrop in this region.
        <span className="br-height">
          <br />
        </span>
        Moreover, one notable characteristic of the first-generation new city is
        its high-rise apartments. Drawing inspiration from this aspect, I
        layered the four films, one atop the other, mirroring the stacked
        aesthetic of high-rise living.
        {/* ‘일산: 인 픽션’은 일산을 배경으로 하고 있거나, 일산을 로케이션으로 하고 있는 영화
        상영전이라는 가상의 이벤트를 위한 포스터입니다.
        <span className="br-height">
          <br />
        </span>
        일산은 1기 신도시로서 당시 시대가 새로운 형태의 도시에 기대하는 바를
        품고 있습니다. 저는 그중에서도 당대가 ‘아파트’를 바라보는 방식을 일산이
        적극적으로 반영하고 있다고 느껴 수집한 4개의 영화를 아파트의 형태로
        정렬했습니다. */}
      </>
    ),
    additionalImages: [],
  },

  {
    src: "/img/isc_web1.png",
    title: "SNU ISC Website Redesign",
    year: "2022",
    tags: ["website", "UX/UI"],
    id: "6",
    video: "n4YX-Qpb8LU",
    description: (
      <>
        {/* 정보문화학과 홈페이지 개편 당시 메인 화면 UI와 프론트엔드 개발로
        참여했습니다. 기존 정보문화학과 홈페이지의 사용자 경험을 개선하고,
        정보문화학에 관심을 가진 학생들을 주 타겟으로 메인 화면의 UI를
        구성했습니다.
        <span className="br-height">
          <br />
        </span>
        기존 정보문화학과의 컬러를 극대화하는 동시에, 학과의 정체성을 메인
        화면에서 체험할 수 있도록 모션을 적극적으로 활용했습니다. */}
        <a href="https://isc.snu.ac.kr">https://isc.snu.ac.kr</a>
        <span className="br-height">
          <br />
        </span>
        I was part of the Task Force (TF) for the website redesign of the
        department of Information Science and Culutre website, where I engaged
        in the design and front-end development of the main page.
        <span className="br-height">
          <br />
        </span>
        Aiming to cater to students interested in majoring in Information
        Science and Culture, I structured the page to allow a glance at the
        department's curriculum right from the main screen.
      </>
    ),
    additionalImages: ["/img/isc_web2.png", "/img/isc_web3.png"],
  },

  {
    src: "/img/planner.png",
    title: "Routine Planner",
    year: "2022",
    tags: ["editorial"],
    id: "7",
    video: "",
    description: (
      <>
        {/* 저는 언제나 다이어리나 플래너에는 강제성이 필요하다고 생각해왔습니다.
        특히 플래너는 인간 몸의 확장으로서 일종의 미디어처럼 기능해야 합니다.
        나의 생각을 풀어놓되 적당한 제약으로 그것을 잘 갈무리할 수 있도록요.
        <span className="br-height">
          <br />
        </span>
        루틴 플래너는 우리가 일상을 지켜나갈 수 있게 도와주는 ‘루틴’에 초점을
        맞춘 플래너입니다. 내가 무엇을 하고 하지 않는지, 어떤 행동을 해야만 하고
        어떤 행동을 할 때 기쁨과 성취감을 느끼는지를 기록하고 반추할 수 있게
        합니다. */}
        I have always believed that diaries and planners require a certain
        degree of compulsoriness. Especially, a planner should function like an
        extension of the human body, acting as a sort of media. It should allow
        for a free flow of my thoughts, yet with appropriate constraints to
        organize them well.
        <span className="br-height">
          <br />
        </span>
        Routine Planner is focused on ‘routine’ which aids us in maintaining our
        daily life. It allows for recording what I do and do not do, what
        actions are necessary and what actions bring joy and a sense of
        accomplishment, facilitating reflection on these aspects.
      </>
    ),
    additionalImages: [
      "/img/planner_1.png",
      "/img/planner_2.png",
      "/img/planner_3.png",
      "/img/planner_4.png",
      "/img/planner_5.png",
    ],
  },

  {
    src: "/img/iloveyoumelisa.gif",
    title: "I love you, Melisa",
    year: "2021",
    tags: ["motion", "drawing"],
    id: "8",
    video: "",
    description: (
      <>
        {/* 내 여자친구가 좀비로 변했다면?! …이라는 아이디어에서 출발한 좀비
        아포칼립스 핸드메이드 애니메이션입니다. 과연 주인공은 어떤 선택을
        내릴까요?! */}
        The animation, starting from the quirky idea of "What if my girlfriend
        turned into a zombie?!", unfolds in a zombie apocalypse scenario. What
        choice will the protagonist make?!
        <span className="br-height">
          <br />
        </span>
        bgm:{" "}
        <a href="https://www.youtube.com/watch?v=p9Ev6WtAciY">
          October Country - My Girlfriend is a Witch
        </a>
      </>
    ),
    additionalImages: ["/img/ilym1.gif"],
  },

  {
    src: "/img/whatsinmybag1.png",
    title: "What's in Hyezzz's Bag?",
    year: "2022",
    tags: ["website"],
    id: "9",
    video: "",
    description: (
      <>
        <a href="https://hy3zzz.github.io/What-s-in-Hyezzz-s-Bag/">
          https://hy3zzz.github.io/What-s-in-Hyezzz-s-Bag/
        </a>
        <span className="br-height">
          <br />
        </span>
        This website was crafted during the 'What’s in My Bag?' workshop hosted
        by After New Order. The idea was to transplant the 'What’s in My Bag?'
        content onto a web platform as an effective method to introduce myself.
        In reflecting the notion of revealing myself, the imagery of X-Ray came
        to mind.
        <span className="br-height">
          <br />
        </span>
        When you hover the mouse over each item, the original image of the item
        appears. And with a click, you can read my personal anecdotes associated
        with each item.
      </>
    ),
    additionalImages: ["/img/whatsinmybag2.png"],
  },

  {
    src: "/img/gyeongui.png",
    title: "Encounter on the Gyeongui Jungang Line",
    year: "2021",
    tags: ["editorial"],
    id: "10",
    video: "",
    description: (
      <>
        I redesigned the short story 'Encounter on the Gyeongui Jungang Line' by
        the author Shim Neoul. The main graphic element was taken from the route
        map of the Kyungui Line, and I actively tried to represent the story's
        content in a concrete form in the inner design. The photos used in the
        book were also actively expressing a lively yet somewhat uncomfortable
        mood, for which I conducted the shooting and post-processing myself.
      </>
    ),
    additionalImages: [
      "/img/gyeongui1.png",
      "/img/gyeongui2.png",
      "/img/gyeongui3.png",
    ],
  },

  {
    src: "/img/fcc.png",
    title: "Fridge Cliché Catalog",
    year: "2022",
    tags: ["graphic", "editorial"],
    id: "11",
    video: "",
    description: (
      <>
        16 pages / A4 / Digital Print Gloss Coated Paper 120g
        <span className="br-height">
          <br />
        </span>
        The 'Fridge Cliché Catalog' originated from the concept of archiving
        specific shots in films: capturing scenes from the perspective of food
        inside the fridge, looking out at the people!
        <span className="br-height">
          <br />
        </span>
        Whose fridge do you think the food in this catalog came from? And which
        movie character do they belong to? Take a guess!
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
    ],
  },

  {
    src: "/img/wonderapp.gif",
    title: "w@nder: campus event all-in-one service",
    year: "2022",
    tags: ["UX/UI"],
    id: "12",
    video: "82_zrIAqHGY",
    description: (
      <>
        {/* 기획. 강승지, 성다은
        <span className="br-height">
          <br />
        </span>
        개발. 박준영
        <span className="br-height">
          <br />
        </span>
        디자인. 신혜원
        <span className="br-height">
          <br />
        </span>
        <span className="br-height">
          <br />
        </span> */}
        <b>Outstanding Award in Woodeok New Media Creator Competition</b>
        <span className="br-height">
          <br />
        </span>
        <b>Excellence Award in SNUBIZ Startup Competition</b>
        <span className="br-height">
          <br />
        </span>
        w@nder is a service that initiated from the pain point where the
        collection, promotion, and archiving of events within the university
        were being carried out in an inefficient manner.
        <span className="br-height">
          <br />
        </span>
        I am involved in the entire process starting from market research, user
        interviews and analysis, persona derivation, to designing workflow and
        wireframes for MVP, and actual UI design as the only designer of the
        team(comprised of 4 members, 2 from Business Administration, 1 from the
        Department of Communication and Information)
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
    ],
  },

  {
    src: "/img/wonder.png",
    title: "w@nder: campus event all-in-one service",
    year: "2022",
    tags: ["graphic", "identity", "motion"],
    id: "13",
    video: "",
    description: (
      <>
        <b>Outstanding Award in Woodeok New Media Creator Competition</b>
        <span className="br-height">
          <br />
        </span>
        <b>Excellence Award in SNUBIZ Startup Competition</b>
        <span className="br-height">
          <br />
        </span>
        w@nder is a service initiated from the pain point where the collection,
        promotion, and archiving of events within the university are proceeding
        in an inefficient direction. You can find more details about this
        service itself in the UX/UI tag related to the same service.
        <span className="br-height">
          <br />
        </span>
        Targeting university students, and dealing with small-scale amateur
        events named as university events, we emphasized a quaint feel to
        leverage the characteristics of the service. Also, much like how peers
        grow through various experiences at the university, we set the main
        keyword for the service image as "exploration." We aimed to highlight
        the service's characteristics using quaint graphic elements such as base
        camps, mountain climbing, and binoculars.
        {/* 기획. 강승지, 성다은
        <span className="br-height">
          <br />
        </span>
        개발. 박준영
        <span className="br-height">
          <br />
        </span>
        디자인. 신혜원
        <span className="br-height">
          <br />
        </span>
        <span className="br-height">
          <br />
        </span>
        서울대학교 사회과학대학 우덕 크리에이터 공모전, 경영대학 벤처경영학
        SNUBIZ 창업경진대회 우수상을 수상한 프로젝트입니다.
        <span className="br-height">
          <br />
        </span>
        w@nder는 대학 내 이벤트의 수집과 홍보, 아카이빙이 비효율적인 방향으로
        이루어지고 있다는 페인 포인트에서 시작한 서비스입니다. 해당 서비스
        자체에 대한 내용은 UX/UI 태그에 있는 동 서비스 관련 정보에서 찾아보실 수
        있습니다.
        <span className="br-height">
          <br />
        </span>
        대학생을 타겟으로 하고 있고, 대학 이벤트라는 소규모 아마추어 이벤트를
        다루고 있는 서비스의 특성을 살려 아기자기한 느낌을 강조했습니다. 또한
        대학에서 다양한 경험을 통해 성장하는 학우들의 모습처럼 서비스 이미지의
        주 키워드를 “탐험”으로 정했습니다. 베이스캠프, 마운틴 클라이밍, 쌍안경
        등의 아기자기한 그래픽 요소로 서비스의 특성을 강조하고자 했습니다. */}
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
    ],
  },

  {
    src: "/img/10size10text-01.png",
    title: "10 text 10 size",
    year: "2022",
    tags: ["editorial"],
    id: "12",
    video: "",
    description: (
      <>
        This project entailed editorial design work of collecting 10 different
        sizes based on a specific theme.
        <span className="br-height">
          <br />
        </span>
        Taking the editorial designs used in the field of cultural contents in
        the past or still in use today as the main theme, the project progressed
        by working on 10 texts and sizes. Through this, an effort was made to
        explore and express the diversity and importance of editorial design in
        the field of cultural contents.
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
    ],
  },

  {
    src: "/img/whoami1.png",
    title: "Who am I for Design Portfolio and Capstone Project",
    year: "2022",
    tags: ["UX/UI", "website"],
    id: "12",
    video: "",
    description: (
      <>
        <a href="https://who-am-i-for-designportfolio.netlify.app">
          https://who-am-i-for-designportfolio.netlify.app
        </a>
        <span className="br-height">
          <br />
        </span>
        The fall semester of 2023 kicked off with two of my major courses
        immediately assigning me the task of introducing myself. This kind of
        self-introduction happens 3 to 4 times a year, and each time, crafting a
        PowerPoint presentation and delivering it felt bland. I can only imagine
        how dull it must be for the audience.
        <span className="br-height">
          <br />
        </span>
        Therefore, I utilized my free time to create a virtual self-introduction
        comic book using the turn.js library.
        <span className="br-height">
          <br />
        </span>
        I showcased my growth background and notable projects through simple
        animations, and set a 5-minute timer at the top, enabling both myself
        and the audience to keep track of the remaining time during the
        presentation.
      </>
    ),
    additionalImages: ["/img/whoami2.png"],
  },
];

function App() {
  const allTags = [...new Set(imagesData.flatMap((image) => image.tags))];
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
        500: 1,
      }}
      className="masonry-grid"
      columnClassName="masonry-grid_column">
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
    <div style={{ backgroundColor: isOverlayOpen ? "black" : "white" }}>
      <Router>
        <NavBar
          allTags={allTags}
          selectedTag={selectedTag}
          onTagClick={handleTagClick}
        />
        <Routes>
          <Route path="/" element={<Gallery />} />
        </Routes>
        {selectedImage && (
          <Overlay image={selectedImage} onClose={handleOverlayClose} />
        )}
      </Router>
    </div>
  );
}

export default App;
