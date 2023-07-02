import "./side-videos.scss";

const SideVideos = (props) => {
  const fileredArray = props.videos.filter((video) => {
    return video.id !== props.selectedVideo.id;
  });
  //   console.log(props.films);
  return (
    <section className="side-videos">
      <h2 className="side-videos__title">NEXT VIDEOS</h2>
      <ul className="video-list">
        {fileredArray.map((video) => {
          return (
            <li
              onClick={() => {
                props.clickHandler(video.id);
              }}
              key={video.id}
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
          );
        })}
      </ul>
    </section>
  );
};

export default SideVideos;
