import "./scss/style.scss";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as types from "./redux/actionType";

//components----------------------------------
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Main from "./components/main/Main";
import Youtube from "./components/sub/Youtube";
import About from "./components/sub/About";
import Community from "./components/sub/Community";
import Gallery from "./components/sub/Gallery";
import Contact from "./components/sub/Contact";
import Join from "./components/sub/Join";
import Blog from "./components/sub/Blog";

function App() {
  const path = process.env.PUBLIC_URL;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.MEMBER.start });
    dispatch({ type: types.YOUTUBE.start });
    dispatch({ type: types.FLICKR.start, opt: { type: "interest" } });
    dispatch({ type: types.GALLERY.start });
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header type={"main"} />
          <Main />
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
