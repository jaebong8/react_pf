import "./scss/style.scss";
import { Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Content from "./components/main/Content";
import Visual from "./components/main/Visual";
import Youtube from "./components/sub/Youtube";
import About from "./components/sub/About";
import Community from "./components/sub/Community";
import Gallery from "./components/sub/Gallery";
import Contact from "./components/sub/Contact";
import Join from "./components/sub/Join";

function App() {
  return (
    <>
      <Header />

      <Route exact path="/">
        <Visual type={"main"} />
        <Content />
      </Route>

      <Route path="/about" component={About}></Route>
      <Route path="/community" component={Community}></Route>
      <Route path="/gallery" component={Gallery}></Route>
      <Route path="/youtube" component={Youtube}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/join" component={Join}></Route>
      <Footer />
    </>
  );
}

export default App;