// import axios from "axios";

// const API = "https://project-2-api.herokuapp.com/videos";
// const APIKEY = "?api_key=<53e14c8e-d35f-4d88-9706-3fc9b5608313>";

// const fetchVideos = async () => {
//     return axios.get(API);
// };

// export { API, APIKEY, fetchVideos };


import axios from "axios";

const API = "https://project-2-api.herokuapp.com/videos";
const APIKEY = "?api_key=53e14c8e-d35f-4d88-9706-3fc9b5608313";

const APIDEFAULT =
  "https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=53e14c8e-d35f-4d88-9706-3fc9b5608313";


const fetchVideos = async () => {
    return axios.get(API + APIKEY);
};

const fetchSelectedVideo = async(videoID) => {
    return axios.get(`${API}/${videoID}${APIKEY}`)
};

export { API, APIKEY, APIDEFAULT, fetchVideos, fetchSelectedVideo };
