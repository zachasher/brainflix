import "./side-videos.scss";
import { Link } from "react-router-dom";
import React from "react";
// ({filteredVideo, shshsl})
const SideVideos = (props) => {
  return (
    <section className="side-videos">
      <h2 className="side-videos__title">NEXT VIDEOS</h2>
      <ul className="video-list">
        {props.filteredVideo.map((video) => (
          <Link
            key={video.id}
              to={`/videos/${video.id}`}>
            <li
            className="video-list-item"
          >
            <div className="video-list-item__thumbnail">
              <img
                src={video.image}
                alt={video.title}
                className="video-list-item__thumbnail-image"
              />
            </div>
            <div className="video-list-item__details">
              <h3 className="video-list-item__title">{video.title}</h3>
              <p className="video-list-item__channel">{video.channel}</p>
            </div>
            </li>
          </Link>
        ))}
        ;
      </ul>
    </section>
  );
};

export default SideVideos;
