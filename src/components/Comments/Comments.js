import "./comments.scss";

import { convertedDate } from "../../utils/apiUtils.mjs";

function Comments(props) {
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