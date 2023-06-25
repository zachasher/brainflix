import "./videodetails.scss";

import viewsIcon from "./../../assets/icons/views.svg";
import likesIcon from "./../../assets/icons/likes.svg";

function VideoDetails(props) {
  return (
    <section className="active-video-details">
      <h1 className="active-video-details__title">{props.video.title}</h1>
      <article className="stats">
        <div className="stats__left">
          <p className="stats__channel">By {props.video.channel}</p>
          <p className="stats__date">{props.video.timestamp}</p>
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
