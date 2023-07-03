// // import { useState, useEffect } from "react";
// // import { fetchVideos } from "../utils/apiUtils.mjs";

// // // import VideoList from "./data/videos.json";
// // import VideoList from "../data/video-details.json";
// // import VideoShortList from "../data/videos.json";

// // import Nav from "../components/navbar/Navbar.js";
// // import MainVideo from "../components/Main-Video/MainVideo.js";
// // import VideoDetails from "../components/VideoDetails/VideoDetails.js";
// // import CommentForm from "../components/CommentForm/CommentForm.js";
// // import Comments from "../components/Comments/Comments.js";
// // import SideVideos from "../components/SideVideos/SideVideos.js";

// // function Home() {
// //   const [videos, setVideos] = useState([]);
// //   const [selectedVideo, setSelectedVideo] = useState(null);

// //   //   const clickHandler = (videoID) => {
// //   //     const selectedVideoData = VideoList.filter((video) => video.id === videoID);
// //   //     setSelectedVideo(selectedVideoData[0]);
// //   //   };

// //   const clickHandler = async (videoID) => {
// //     try {
// //       const response = await fetchVideos(videoID);
// //       setSelectedVideo(response.data);
// //     } catch (error) {
// //       console.log("Error fetching video:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetchVideos();
// //         setVideos(response.data);
// //       } catch (error) {
// //         console.log("Error fetching videos:", error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

//   return (
//     <div className="App">
//       <Nav />
//       <MainVideo video={selectedVideo} />
//       <main className="main-section">
//         <section className="main-section1">
//           <VideoDetails video={selectedVideo} />
//           <CommentForm video={selectedVideo} />
//           <Comments video={selectedVideo} />
//         </section>
//         <SideVideos
//           videos={videos}
//           clickHandler={clickHandler}
//           selectedVideo={selectedVideo}
//         />
//       </main>
//     </div>
//   );
// // }

// // export default Home;

// import { useState, useEffect } from "react";
// import axios from "axios";

// import Nav from "../components/navbar/Navbar.js";
// import MainVideo from "../components/MainVideo/MainVideo.js";
// import VideoDetails from "../components/VideoDetails/VideoDetails.js";
// import CommentForm from "../components/CommentForm/CommentForm.js";
// import Comments from "../components/Comments/Comments.js";
// import SideVideos from "../components/SideVideos/SideVideos.js";

// function HomePage() {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get(
//           "https://project-2-api.herokuapp.com/videos?api_key=<53e14c8e-d35f-4d88-9706-3fc9b5608313>"
//         );
//         setVideos(response.data);
//         setSelectedVideo(response.data[0]);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   const clickHandler = (videoID) => {
//     const selectedVideoData = videos.find((video) => video.id === videoID);
//     setSelectedVideo(selectedVideoData);
//   };

//   if (!selectedVideo) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="App">
//       <Nav />
//       <MainVideo video={selectedVideo} />
//       <main>
//         <section className="main-section1">
//           <VideoDetails video={selectedVideo} />
//           <CommentForm video={selectedVideo} />
//           <Comments video={selectedVideo} />
//         </section>
//         <SideVideos
//           videos={videos}
//           clickHandler={clickHandler}
//           selectedVideo={selectedVideo}
//         />
//       </main>
//     </div>
//   );
// }

// export default HomePage;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import MainVideo from "../components/MainVideo/MainVideo.js";
import VideoDetails from "../components/VideoDetails/VideoDetails.js";
import CommentForm from "../components/CommentForm/CommentForm.js";
import Comments from "../components/Comments/Comments.js";
import SideVideos from "../components/SideVideos/SideVideos.js";

import {
  API,
  APIKEY,
  APIDEFAULT,
  fetchVideos,
  fetchSelectedVideo,
} from "../utils/apiUtils.mjs";

function HomePage() {
  const [videos, setVideos] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const { videoID } = useParams();

  const getstate = async () => {
    try {
      const response = await fetchVideos();
      let selectedVideoResponse = null;
      if (videoID) {
        selectedVideoResponse = await fetchSelectedVideo(videoID);
      } else {
        selectedVideoResponse = await fetchSelectedVideo(response.data[0].id);
      }
      setVideos(response.data);
      setSelectedVideo(selectedVideoResponse.data)
    } catch (error) {
      console.log("Error getting data", error);
    }
  };

  useEffect(() => {
    // axios
    //   .get(`${API}${APIKEY}`)
    //   .then((response) => {
    //     setVideos(response.data);
    //     console.log("First call", response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    getstate();
  }, [videoID]);

//   useEffect(() => {
//     if (videoID) {
//       axios
//         .get(`${API}/${videoID}${APIKEY}`)
//         .then((response) => {
//           setSelectedVideo(response.data);
//           console.log("Second call", response.data);
//         })
//         .catch((error) => {
//           console.log("error fetching data", error);
//         });
//     } else {
//       axios
//         .get(`${APIDEFAULT}`)
//         .then((response) => {
//           setSelectedVideo(response.data);
//         })
//         .catch((error) => {
//           console.log("error fetching data", error);
//         });
//     }
//   }, [videoID]);

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
