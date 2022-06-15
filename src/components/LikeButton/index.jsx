import { useState } from "react";

import { StyledLikeButton, HeartFill, HeartLine } from "./style";

export default function LikeButton({ userId, postId }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  }

  return (
    <StyledLikeButton>
      {liked ? (
        <>
          <HeartFill onClick={() => handleClick()} />
          <p>{likes}</p>
        </>
      ) : (
        <>
          <HeartLine onClick={() => handleClick()} />
          <p>{likes}</p>
        </>
      )}
    </StyledLikeButton>
  );
}
