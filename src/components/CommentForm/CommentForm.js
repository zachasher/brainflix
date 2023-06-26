import "./CommentForm.scss";

function CommentForm(props) {
  return (
    <section className="comment-form">
      <p className="comment-count">{props.video.comments.length} Comments</p>
      <article novalidate class="form">
        <div class="form__icon"></div>
        <form class="form__fields">
          <div className="form__fields1">
            <label for="text">JOIN THE CONVERSATION</label>
            <textarea
              placeholder="Add a new comment"
              name="text"
              rows="5"
              required
              class="form__input"
              id="comment"
            ></textarea>
          </div>
          <button type="submit" class="form__button">
            COMMENT
          </button>
        </form>
      </article>
    </section>
  );
}

export default CommentForm;
