import "./video-details.scss";

import viewsIcon from "./../../assets/icons/views.svg";
import likesIcon from "./../../assets/icons/likes.svg";

function VideoDetails(props) {
  function convertedDate(date) {
    const showDate = new Date(date);
    const month = (showDate.getMonth() + 1).toString().padStart(2, "0");
    const day = showDate.getDate().toString().padStart(2, "0");
    const year = showDate.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
  }

  return (
    <section className="active-video-details">
      <h1 className="active-video-details__title">{props.video.title}</h1>
      <article className="stats">
        <div className="stats__left">
          <p className="stats__channel">By {props.video.channel}</p>
          <p className="stats__date">{convertedDate(props.video.timestamp)}</p>
        </div>
        <div className="stats__right">
          <div className="stats__views">
            <img src={viewsIcon} className="stats__views--icon"></img>
            <p className="stats__views--count">{props.video.views}</p>
          </div>
          <div className="stats__likes">
            <img src={likesIcon} className="stats__likes--icon"></img>
            <p className="stats__likes--count">{props.video.likes}</p>
          </div>
        </div>
      </article>
      <p className="active-video-details__description">{props.video.description}</p>
    </section>
  );
}

export default VideoDetails;





// // import "./video-details.scss";
// // import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";
// // import viewsIcon from "./../../assets/icons/views.svg";
// // import likesIcon from "./../../assets/icons/likes.svg";
// // import { APIKEY } from "../../utils/apiUtils.mjs";

// // function VideoDetails(props) {
// //   const [video, setVideo] = useState(null);

// //   const { videoID: iD } = useParams();

// //   useEffect(() => {
// //     axios
// //       .get(`https://project-2-api.herokuapp.com/videos/${iD}/${APIKEY}`)
// //       .then((response) => {
// //         console.log(response.data);
// //         setVideo(response.data);
// //       });
// //   }, [iD]);



// // import "./video-details.scss";
// // import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";
// // import { API, APIKEY } from "../../utils/apiUtils.mjs";
// // import viewsIcon from "./../../assets/icons/views.svg";
// // import likesIcon from "./../../assets/icons/likes.svg";
// // import "./VideoDetails";

// // const VideoDetails = (props) => {
// //   const [video, setVideo] = useState(null);
// //   const { videoID: iD } = useParams();

// //   useEffect(() => {
// //     axios.get(`${API}/${iD}${APIKEY}`)
// //     .then((response) => {
// //       console.log(response.data);
// //       setVideo(response.data);
// //     });
// //   }, [iD]);

// //   if (!video) {
// //     return <div>Loading...</div>;
// //   }

// //   function convertedDate(date) {
// //     const showDate = new Date(date);
// //     const month = (showDate.getMonth() + 1).toString().padStart(2, "0");
// //     const day = showDate.getDate().toString().padStart(2, "0");
// //     const year = showDate.getFullYear();
// //     const formattedDate = `${month}/${day}/${year}`;
// //     return formattedDate;
// //   }

// //   return (
// //     <section className="active-video-details">
// //       <h1 className="active-video-details__title">{video.title}</h1>
// //       <article className="stats">
// //         <div className="stats__left">
// //           <p className="stats__channel">By {video.channel}</p>
// //           <p className="stats__date">{convertedDate(video.timestamp)}</p>
// //         </div>
// //         <div className="stats__right">
// //           <div className="stats__views">
// //             <img
// //               src={viewsIcon}
// //               className="stats__views--icon"
// //               alt="Views Icon"
// //             ></img>
// //             <p className="stats__views--count">{video.views}</p>
// //           </div>
// //           <div className="stats__likes">
// //             <img
// //               src={likesIcon}
// //               className="stats__likes--icon"
// //               alt="Likes Icon"
// //             ></img>
// //             <p className="stats__likes--count">{video.likes}</p>
// //           </div>
// //         </div>
// //       </article>
// //       <p className="active-video-details__description">{video.description}</p>
// //     </section>
// //   );
// // };

// // export default VideoDetails;




// import "./video-details.scss";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { API, APIKEY } from "../../utils/apiUtils.mjs";
// import viewsIcon from "./../../assets/icons/views.svg";
// import likesIcon from "./../../assets/icons/likes.svg";

// const VideoDetails = ({ videoID }) => {
//   const [video, setVideo] = useState(null);

//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         const response = await axios.get(`${API}/${videoID}${APIKEY}`);
//         setVideo(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchVideo();
//   }, [videoID]);

//   if (!video) {
//     return <div>Loading...</div>;
//   }

//   function convertedDate(date) {
//     const showDate = new Date(date);
//     const month = (showDate.getMonth() + 1).toString().padStart(2, "0");
//     const day = showDate.getDate().toString().padStart(2, "0");
//     const year = showDate.getFullYear();
//     const formattedDate = `${month}/${day}/${year}`;
//     return formattedDate;
//   }

//   return (
//     <section className="active-video-details">
//       <h1 className="active-video-details__title">{video.title}</h1>
//       <article className="stats">
//         <div className="stats__left">
//           <p className="stats__channel">By {video.channel}</p>
//           <p className="stats__date">{convertedDate(video.timestamp)}</p>
//         </div>
//         <div className="stats__right">
//           <div className="stats__views">
//             <img
//               src={viewsIcon}
//               className="stats__views--icon"
//               alt="Views Icon"
//             />
//             <p className="stats__views--count">{video.views}</p>
//           </div>
//           <div className="stats__likes">
//             <img
//               src={likesIcon}
//               className="stats__likes--icon"
//               alt="Likes Icon"
//             />
//             <p className="stats__likes--count">{video.likes}</p>
//           </div>
//         </div>
//       </article>
//       <p className="active-video-details__description">{video.description}</p>
//     </section>
//   );
// };

// export default VideoDetails;
