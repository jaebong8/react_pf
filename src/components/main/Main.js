import React from "react";
import Visual from "./Visual";
import Section1 from "./Section1";
import Section2 from "./Section2";
import News from "./News";

function Main() {
  return (
    <main style={{ backgroundColor: "#ebe6d7" }}>
      <Visual type={"main"} />
      <Section1 />
      <Section2 />
      <News />
    </main>
  );
}

export default Main;
