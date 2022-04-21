import "./scss/style.scss";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMembers, setYoutube } from "./redux/actions";
import axios from "axios";

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
  const fetchMembers = async () => {
    const url = path + `/DB/member.json`;
    axios.get(url).then((json) => {
      dispatch(setMembers(json.data.data));
    });
  };

  const fetchYoutube = async () => {
    const key = "AIzaSyCIiUbJj1mOlyiNDy8QONEEYimF4Ta1qP4";
    const id = "PLCCz4evGBSLXFehGpZ1OxnWiMM-jrsddP";
    const num = 6;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;
    await axios.get(url).then((data) => {
      console.log(data.data.items);
      // setVideos(data.data.items);
      dispatch(setYoutube(data.data.items));
    });
  };

  useEffect(() => {
    fetchYoutube();
    fetchMembers();
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
