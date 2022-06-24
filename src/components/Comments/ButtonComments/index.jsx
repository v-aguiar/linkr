import { AiOutlineComment } from "react-icons/ai";
import UserContext from "../../../contexts/UserContext";
import api from "../../../services/api";
import { ButtonCommentsContainer } from "./style";

export default function ButtonComments({ postId, qtdComments, setComments, handleShowComments }) {
  const { showComments, setShowComments } = handleShowComments;
  const { header } = UserContext();

  function findComments() {
    if( showComments ) {
      setShowComments( false );
      return
    };

    api.get(`/posts/${postId}/comments`, header)
      .then((res) => {
        setShowComments( true );
        setComments( res.data );
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <ButtonCommentsContainer>
      <button name="button-comments" onClick={findComments}>
          <AiOutlineComment />
      </button>
      <p>{ qtdComments } comments</p>
    </ButtonCommentsContainer>
  )
}