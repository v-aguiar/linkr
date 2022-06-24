import { Link } from "react-router-dom";
import { PostCommentContainer } from "./style";

export default function PostComment({ comment, userId, redirect }) {
  const { image, name, commentText, state } = comment;

  function stateUser() {
    if( state === '' ) return '';

    const senderIsMine = state === 'author' ? "post's author" : state;
    return <span>• { senderIsMine }</span>
  }

  function handleRedirectUserPage() {
    return (
      <Link
        to={`/user/${ comment.id }`} 
        state={ redirect }
      >
        <h3>{ name }</h3>
      </Link>
    )
  }

  return (
    <PostCommentContainer>
      <img src={ image } alt="" />
      <div className="describe">
        <div>{ handleRedirectUserPage() } { stateUser() }</div>
        <p>{ commentText }</p>
      </div>
    </PostCommentContainer>
  )
}