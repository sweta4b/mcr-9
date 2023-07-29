import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import VideoListing from './Pages/VideoListing';
import WatchLater from './Pages/WatchLater';
import SingleVideo from './Pages/SingleVideo';
import Explore from './Pages/Explore';
import Playlist from './Pages/Playlist';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/video/:category" element={<VideoListing/>}></Route>
        <Route path="/videos/:videoId" element={<SingleVideo/>}></Route>
        <Route path="/watchlater" element = {<WatchLater/>}></Route>
        <Route path="/explore" element = {<Explore/>}></Route>
        <Route path="/playlist" element={<Playlist/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
