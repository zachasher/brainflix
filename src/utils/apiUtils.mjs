import axios from "axios";

const API = "http://localhost:8080/videos/";

const APIDEFAULT =
  "http://localhost:8080/videos/84e96018-4022-434e-80bf-000ce4cd12b8";


const fetchVideos = async () => {
    return axios.get(API);
};

const fetchSelectedVideo = async(videoID) => {
    return axios.get(`${API}/${videoID}`)
};

const uploadVideo = async (videoData) => {
  return axios.post(API, videoData);
};

function convertedDate(date) {
  const showDate = new Date(date);
  const month = (showDate.getMonth() + 1).toString().padStart(2, "0");
  const day = showDate.getDate().toString().padStart(2, "0");
  const year = showDate.getFullYear();
  const formattedDate = `${month}/${day}/${year}`;
  return formattedDate;
}

export { API, APIDEFAULT, fetchVideos, fetchSelectedVideo, convertedDate, uploadVideo };
