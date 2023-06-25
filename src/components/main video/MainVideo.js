function MainVideo(props) {
  return (
    <div className="mainvideo">
      <video width="100%" height="100%" controls poster={props.video.image}>
        <source
          src=""
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default MainVideo;
