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




// import "./comments.scss";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { API, APIKEY } from "../../utils/apiUtils.mjs";

// const Comments = ({ videoID }) => {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const response = await axios.get(`${API}/${videoID}${APIKEY}`);
//         setComments(response.data.comments);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchComments();
//   }, [videoID]);

//   function convertedDate(date) {
//     const showDate = new Date(date);
//     const month = (showDate.getMonth() + 1).toString().padStart(2, "0");
//     const day = showDate.getDate().toString().padStart(2, "0");
//     const year = showDate.getFullYear();
//     const formattedDate = `${month}/${day}/${year}`;
//     return formattedDate;
//   }

//   return (
//     <section className="comment-list">
//       {comments.map((comment) => (
//         <article className="comment" key={comment.id}>
//           <div className="comment__icon" />
//           <div className="comment__main">
//             <div className="comment__main-namedate">
//               <h3 className="comment__name">{comment.name}</h3>
//               <span className="comment__date">
//                 {convertedDate(comment.timestamp)}
//               </span>
//             </div>
//             <p className="comment__text">{comment.comment}</p>
//           </div>
//         </article>
//       ))}
//     </section>
//   );
// };

// export default Comments;

