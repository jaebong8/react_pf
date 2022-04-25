import React, { useEffect, useRef, useState } from "react";
import Visual from "./Visual";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Visual2 from "./Visual2";
import News from "./News";
import RecentYoutube from "./RecentYoutube";
import ScrollTopBtn from "./ScrollTopBtn";
import ScrollBtns from "./ScrollBtns";
import Anime from "../../class/anim";

function Main() {
  const main = useRef();
  const pos = useRef([]);
  const [Scrolled, setScrolled] = useState(0);
  const [Sections, setSections] = useState([]);
  const [Index, setIndex] = useState(0);

  const getPos = () => {
    const sections = main.current.querySelectorAll(".myScroll");
    setSections(Array.from(sections));
    pos.current = [];
    sections.forEach((sec) => {
      pos.current.push(sec.offsetTop);
    });
  };
  const activation = () => {
    const base = -100;
    let scroll = window.scrollY;
    setScrolled(scroll);
    const btns = main.current.querySelectorAll(".scrollBtns li");

    pos.current.map((pos, idx) => {
      if (scroll >= pos + base) {
        for (let btn of btns) btn.classList.remove("on");
        btns[idx].classList.add("on");
      }
    });
  };
  useEffect(() => {
    getPos();
    window.addEventListener("resize", getPos);
    window.addEventListener("scroll", activation);
    return () => {
      window.removeEventListener("resize", getPos);
      window.removeEventListener("scroll", activation);
    };
  }, []);
  useEffect(() => {
    new Anime(window, {
      prop: "scroll",
      value: pos.current[Index],
      duration: 500,
    });
  }, [Index]);

  return (
    <main
      style={{ backgroundColor: "#ebe6d7", paddingBottom: "50px" }}
      ref={main}
      onLoad={getPos}
    >
      <Visual type={"main"} />
      <Section1 />
      <Section2 />
      <RecentYoutube />
      <Visual2 />
      <News />
      <Section3 />
      <Section4 />
      <Section5 />
      <ScrollBtns Sections={Sections} setIndex={setIndex} />
      <ScrollTopBtn />
    </main>
  );
}

export default Main;
