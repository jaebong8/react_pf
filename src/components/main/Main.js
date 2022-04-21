import React from "react";
import Visual from "./Visual";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import News from "./News";
import RecentYoutube from "./RecentYoutube";

function Main() {
  return (
    <main style={{ backgroundColor: "#ebe6d7" }}>
      <Visual type={"main"} />
      <Section1 />
      <Section2 />
      <RecentYoutube />
      <News />
      <Section3 />
    </main>
  );
}

export default Main;
