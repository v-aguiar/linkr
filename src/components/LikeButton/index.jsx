import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

import api from "../../services/api";

import { StyledLikeButton, HeartFill, HeartLine } from "./style";

export default function LikeButton({ userId = 6, postId = 1 }) {
  const [showTooltip, setShowTooltip] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState({
    total: "0",
    user: "0",
  });
  // TODO: get users who liked the post before
  const [likeUsers, setLikeUsers] = useState({
    first: "",
    second: "",
  });

  useEffect(() => {
    const fetchLikes = async () => {
      const totalLikes = await api.get(`likes/${postId}/`);

      setLikes({ ...likes, total: totalLikes.data.likes });
    };

    const fetchUserLike = async () => {
      const userLike = await api.get(`likes/${postId}/?userId=${userId}`);
      setLikes({ ...likes, user: userLike.data.likes * 1 });
      if (userLike.data.likes * 1 === 1) {
        setLiked(true);
      }
    };

    fetchUserLike().catch((err) => {
      console.error("⚠ Error fetching user like: ", err);
      return;
    });

    fetchLikes().catch((err) => {
      console.error("⚠ Error fetching total likes: ", err);
      return;
    });
  }, []); // eslint-disable-line

  function handleClick() {
    setLiked(!liked);
    liked
      ? setLikes({ ...likes, total: likes.total * 1 - 1 })
      : setLikes({ ...likes, total: likes.total * 1 + 1 });
  }

  function likeDataTip() {
    // TODO: refactor function for better performance
    if (likes.total * 1 === 0) {
      return "Curtir!";
    }
    if (liked && likes.total * 1 === 1) {
      return `Você curtiu este post`;
    }
    if (liked && likes.total * 1 === 2) {
      return `Você e ${likeUsers.first}`;
    }
    if (liked && likes.total * 1 > 2) {
      return `Você, ${likeUsers.first} e ${likes.total * 1 - 2} pessoas.}`;
    }
    if (!liked && likes.total * 1 === 1) {
      return `${likeUsers.first} curtiu este post`;
    }
    if (!liked && likes.total * 1 === 2) {
      return `${likeUsers.first} e ${likeUsers.second}`;
    }
    if (!liked && likes.total * 1 > 2) {
      return `${likeUsers.first}, ${likeUsers.second} e ${
        likes.total * 1 - 2
      } pessoas.}`;
    }
  }

  return (
    <StyledLikeButton>
      {showTooltip && (
        <ReactTooltip
          className="toolTip"
          effect="solid"
          place="bottom"
          type="light"
        >
          <span>{likeDataTip()}</span>
        </ReactTooltip>
      )}
      <>
        {liked ? (
          <HeartFill onClick={() => handleClick()} />
        ) : (
          <HeartLine onClick={() => handleClick()} />
        )}
        <p
          data-tip="ReactTooltip"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => {
            setShowTooltip(false);
            setTimeout(() => setShowTooltip(true), 50);
          }}
        >
          {(likes.total * 1) | []}
        </p>
      </>
    </StyledLikeButton>
  );
}
