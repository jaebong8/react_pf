import "./scss/style.scss";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Content from "./components/main/Content";
import Visual from "./components/main/Visual";
import News from "./components/main/News";
import Youtube from "./components/sub/Youtube";
import About from "./components/sub/About";
import Community from "./components/sub/Community";
import Gallery from "./components/sub/Gallery";
import Contact from "./components/sub/Contact";
import Join from "./components/sub/Join";
import Blog from "./components/sub/Blog";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header type={"main"} />
          <Visual type={"main"} />
          <Content />
          <News />
        </Route>

        <Route path="/">
          <Header type={"sub"} />
        </Route>
      </Switch>

      <Route path="/about" component={About}></Route>
      <Route path="/community" component={Community}></Route>
      <Route path="/gallery" component={Gallery}></Route>
      <Route path="/youtube" component={Youtube}></Route>
      <Route path="/blog" component={Blog}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/join" component={Join}></Route>
      <Footer />
    </>
  );
}

export default App;
