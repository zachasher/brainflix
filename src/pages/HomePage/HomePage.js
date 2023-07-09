import "./homepage.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import MainVideo from "../../components/MainVideo/MainVideo.js";
import VideoDetails from "../../components/VideoDetails/VideoDetails.js";
import CommentForm from "../../components/CommentForm/CommentForm.js";
import Comments from "../../components/Comments/Comments.js";
import SideVideos from "../../components/SideVideos/SideVideos.js";

import { fetchVideos, fetchSelectedVideo } from "../../utils/apiUtils.mjs";

function HomePage() {
  const [videos, setVideos] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const { videoID } = useParams();

  const getstate = async () => {
    try {
      const allVideosResponse = await fetchVideos();
      let selectedVideoResponse = null;
      if (videoID) {
        selectedVideoResponse = await fetchSelectedVideo(videoID);
      } else {
        selectedVideoResponse = await fetchSelectedVideo(
          allVideosResponse.data[0].id
        );
      }
      setVideos(allVideosResponse.data);
      setSelectedVideo(selectedVideoResponse.data);
    } catch (error) {
      console.log("Error getting data", error);
    }
  };

  useEffect(() => {
    getstate();
  }, [videoID]);

  if (!selectedVideo || !videos) {
    return <p>Loading...</p>;
  }

  const filteredVideo = videos.filter((element) => {
    return element.id !== selectedVideo.id;
  });

  return (
    <div className="App">
      <MainVideo video={selectedVideo} />
      <main className="main-section">
        <section className="main-section1">
          <VideoDetails video={selectedVideo} />
          <CommentForm video={selectedVideo} />
          <Comments video={selectedVideo} />
        </section>
        <SideVideos filteredVideo={filteredVideo} />
      </main>
    </div>
  );
}

export default HomePage;
