import { useState, useEffect, useId } from "react";
import ReactTooltip from "react-tooltip";

//import api from "../../services/api";

import Comments from "../Comments";
import { StyledCommentButton, CommentLine } from "./style";

export default function CommentButton({ userId, postId }) {
    const [commentsCount, setCommentsCount] = useState([]);
    const [showComment, setShowComment] = useState(false);

    useEffect(() => {
        ReactTooltip.rebuild();
        getCommentsCount();
    });

    function getCommentsCount() {
        axios
          .get(`${process.env.REACT_APP_API_URL}/comments/counter/${id}`)
          .then((response) => {
            setCommentsCount([response.data])
          })
          .catch((error) => {
            console.log(error)
          })
      }
    
      function toggleComments() {
        setShowComment(!showComment)
      }
    
      return (
        <>
            <CommentLine onClick={() => toggleComments()} />
              <StyledCommentButton>
                {parseInt(commentsCount) === 1 ? (
                  <>{commentsCount} comment</>
                ) : (
                  <>{commentsCount} comments</>
                )}
              </StyledCommentButton>
        </>
      )
}