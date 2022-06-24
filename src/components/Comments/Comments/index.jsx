import { useState } from "react";
import { nanoid } from "nanoid";
import UserContext from "../../../contexts/UserContext";
import api from "../../../services/api";
import PostComment from "../PostComment";
import { CommentsContainer } from "./style";

export default function Comments({ comments, setComments, postId, redirect }) {
    const { header, imgUser } = UserContext();
    const [ commentText, setCommentText ] = useState("");
  
    function assembleComments() {
      if( !comments.length ) {
        return <></>;
      }
  
      return (
        <article>
          { comments.map( (comment) => <PostComment 
            key={ nanoid(6) } 
            comment={ comment } 
            redirect={ redirect } 
          /> ) }
        </article>
      );
    }
  
    function handleChangeComment( e ) {
      setCommentText( e.target.value );
    }
  
    function handleComment( e ) {
      e.preventDefault();    
      const body = { commentText };
  
      api.post(`/posts/${postId}/comment`,body, header )
        .then( ( res ) => {
          setCommentText("");
          setComments( res.data );
        })
        .catch( e => console.log( e ));
    }
  
    return (
      <CommentsContainer>
        <section>
          { assembleComments() }
        </section>
        <form onSubmit={ handleComment }>
          <img src={ imgUser } alt="" />
          <input 
            type="text"
            name="commentInput"
            value={ commentText }
            onChange={ handleChangeComment }
            placeholder="write a comment..."
          />
        </form>
      </CommentsContainer>
    )
  }