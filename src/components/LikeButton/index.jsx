import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

import api from "../../services/api";

import { handlePostLike } from "./utils/handlePostLike";
import { StyledLikeButton, HeartFill, HeartLine } from "./style";

export default function LikeButton({ userId = 6, postId = 4 }) {
  const [showTooltip, setShowTooltip] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState({
    total: "0",
    user: "0",
  });
  const [whoElseLiked, setWhoElseLiked] = useState({
    first: "",
    second: "",
  });

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const totalLikes = await api.get(`likes/${postId}/`);
        const likesCount = totalLikes.data?.likes;

        setLikes({ ...likes, total: likesCount });
      } catch (err) {
        console.error("⚠ Error fetching total likes: ", err);
      }
    };

    fetchLikes();
  }, []); // eslint-disable-line

  useEffect(() => {
    const fetchUserLike = async () => {
      try {
        const userLike = await api.get(`likes/${postId}/?userId=${userId}`);
        setLikes({ ...likes, user: userLike.data.likes * 1 });
        if (userLike.data.likes * 1 === 1) {
          setLiked(true);
          setLikes({ ...likes, total: likes.total * 1 + 1 });
          return;
        }
      } catch (err) {
        console.error("⚠ Error fetching user like: ", err);
      }
    };

    fetchUserLike();
  }, []); // eslint-disable-line

  useEffect(() => {
    const fetchWhoElseLiked = async () => {
      try {
        const whoElseLikedResponse = await api.get(
          `likes/who/${postId}/${userId}`
        );

        setWhoElseLiked({
          first: whoElseLikedResponse.data[0]?.username,
          second: whoElseLikedResponse.data[1]?.username,
        });
      } catch (err) {
        console.error("⚠ Error fetching who else liked: ", err);
      }
    };

    fetchWhoElseLiked();
  }, []); // eslint-disable-line

  function handleClick() {
    setLiked(!liked);
    liked
      ? setLikes({ ...likes, total: likes.total * 1 - 1 })
      : setLikes({ ...likes, total: likes.total * 1 + 1 });
    liked
      ? handlePostLike(false, postId, userId)
      : handlePostLike(true, postId, userId);
  }

  function likeDataTip() {
    // TODO: refactor function for better performance
    if (liked && likes.total * 1 === 1) {
      return `You liked this post`;
    }
    if (liked && likes.total * 1 === 2) {
      return `You and ${whoElseLiked.first}`;
    }
    if (liked && likes.total * 1 > 2) {
      return `You, ${whoElseLiked.first} and other ${
        likes.total * 1 - 2
      } people.`;
    }
    if (!liked && likes.total * 1 === 1) {
      return `${whoElseLiked.first} liked this post`;
    }
    if (!liked && likes.total * 1 === 2) {
      return `${whoElseLiked.first} and ${whoElseLiked.second}`;
    }
    if (!liked && likes.total * 1 > 2) {
      return `${whoElseLiked.first}, ${whoElseLiked.second} and other ${
        likes.total * 1 - 2
      } people.`;
    }
    return "Like!";
  }

  function getTotalLikes() {
    return likes.total * 1;
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
          {getTotalLikes()}
        </p>
      </>
    </StyledLikeButton>
  );
}
