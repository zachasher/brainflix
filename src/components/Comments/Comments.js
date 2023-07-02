import "./comments.scss";

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
      {props.video.comments.map((comment) => (
        <article className="comment" key={comment.id}>
          <div className="comment__icon"></div>
          <div className="comment__main">
            <div className="comment__main-namedate">
              <h3 className="comment__name">{comment.name}</h3>
              <span className="comment__date">
                {convertedDate(comment.timestamp)}
              </span>
            </div>
            <p className="comment__text">{comment.comment}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Comments;
