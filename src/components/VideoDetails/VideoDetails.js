import viewsIcon from "./../../assets/icons/views.svg";
import likesIcon from "./../../assets/icons/likes.svg";

function VideoDetails(props) {
  return (
    <section className="active-video-details">
      <h1 className="active-video-details__title">{props.video.title}</h1>
      <article className="stats">
        <div className="stats__1">
          <p className="stats__1-channel">By {props.video.channel}</p>
          <p className="stats__1-date">{props.video.timestamp}</p>
        </div>
        <div className="stats__2">
          <div className="stats__2-views">
            <img src={viewsIcon} className="stats__2-views-icon"></img>
            <p className="stats__2-views-count">{props.video.views}</p>
          </div>
          <div className="stats__2-likes">
            <img src={likesIcon} className="stats__2-likes-icon"></img>
            <p className="stats__2-likes-count">{props.video.likes}</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default VideoDetails;
