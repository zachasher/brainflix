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
