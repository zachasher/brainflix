import "./Comments.scss";

function Comments(props) {
    function convertedDate(date) {
        const showDate = new Date(date);
        const month = (showDate.getMonth() + 1).toString().padStart(2, "0");
        const day = showDate.getDate().toString().padStart(2, "0");
        const year = showDate.getFullYear();
        const formattedDate = `${month}/${day}/${year}`;
        return formattedDate;
      }

  return (
    <section className="comment-list">
      <article class="comment">
        <div class="comment__icon"></div>
        <div class="comment__main">
          <div class="comment__main-namedate">
            <h3 class="comment__name">{props.video.comments[0].name}</h3>
            <span class="comment__date">
            {convertedDate(props.video.comments[0].timestamp)}
            </span>
          </div>
          <p class="comment__text">{props.video.comments[0].comment}</p>
        </div>
      </article>
      <article class="comment">
        <div class="comment__icon"></div>
        <div class="comment__main">
          <div class="comment__main-namedate">
            <h3 class="comment__name">{props.video.comments[1].name}</h3>
            <span class="comment__date">
            {convertedDate(props.video.comments[1].timestamp)}
            </span>
          </div>
          <p class="comment__text">{props.video.comments[1].comment}</p>
        </div>
      </article>
      <article class="comment">
        <div class="comment__icon"></div>
        <div class="comment__main">
          <div class="comment__main-namedate">
            <h3 class="comment__name">{props.video.comments[2].name}</h3>
            <span class="comment__date">
            {convertedDate(props.video.comments[2].timestamp)}
            </span>
          </div>
          <p class="comment__text">{props.video.comments[2].comment}</p>
        </div>
      </article>
    </section>
  );
}

export default Comments;
