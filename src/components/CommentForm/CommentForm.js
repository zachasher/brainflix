import "./comment-form.scss";

function CommentForm(props) {
  return (
    <section className="comment-form">
      <p className="comment-count">{props.video.comments.length} Comments</p>
      <article noValidate className="form">
        <div className="form__icon"></div>
        <form className="form__fields">
          <div className="form__fields1">
            <label htmlFor="comment">JOIN THE CONVERSATION</label>
            <textarea
              placeholder="Add a new comment"
              rows="5"
              required
              className="form__input"
              id="comment"
            ></textarea>
          </div>
          <button type="submit" className="form__button">
            COMMENT
          </button>
        </form>
      </article>
    </section>
  );
}

export default CommentForm;
