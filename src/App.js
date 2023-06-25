import "./App.scss";
import { useState } from "react";

// import VideoList from "./data/videos.json";
import VideoList from "./data/video-details.json";

import Nav from "./components/navbar/navbar.js";
import MainVideo from "./components/main video/MainVideo.js";
import VideoDetails from "./components/VideoDetails/VideoDetails.js";

function App() {
  const [videos, setVideos] = useState(VideoList);
  const [selectedVideo, setSelectedVideo] = useState(VideoList[0]);

  const clickHandler = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="App">
      <Nav />
      <MainVideo video={selectedVideo} />
      <main>
        <VideoDetails video={selectedVideo}/>
        <div>COMMENTS</div>
      </main>
      <section>VIDEO LIST</section>
    </div>
  );
}

export default App;
