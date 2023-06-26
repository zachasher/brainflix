import "./App.scss";
import { useState } from "react";

// import VideoList from "./data/videos.json";
import VideoList from "./data/video-details.json";

import Nav from "./components/navbar/navbar.js";
import MainVideo from "./components/main video/MainVideo.js";
import VideoDetails from "./components/VideoDetails/VideoDetails.js";
import CommentForm from "./components/CommentForm/CommentForm.js";
import Comments from "./components/Comments/Comments.js";
import SideVideos from "./components/SideVideos/SideVideos.js";

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
        <section>
        <VideoDetails video={selectedVideo}/>
        <CommentForm/>
        <Comments video={selectedVideo}/>  
        </section>
        <SideVideos
        videos={videos}
        clickHandler={clickHandler}
        selectedVideo={selectedVideo}/>
      </main>
    </div>
  );
}

export default App;
