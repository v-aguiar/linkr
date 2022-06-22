import { useState, useEffect, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";

import { StyledFollowButton } from "./style";

import UserContext from "../../contexts/UserContext";
import api from "../../services/api";

export default function FollowButton({ friendId = 11 }) {
  const [isButtonReady, setIsButtonReady] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [controlFetch, setControlFetch] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [friendsData, setFriendsData] = useState({});

  const { userInfo } = useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  useEffect(() => {
    const fetchFriends = async () => {
      const friends = await api.get(`/friends/${friendId}`, config);

      setFriendsData(friends.data);
      setIsButtonReady(true);
    };

    fetchFriends();
  }, [controlFetch]); // eslint-disable-line

  useEffect(() => {
    const alreadyFriends = friendsData?.friends;
    const findFriend = alreadyFriends?.find(
      (friend) => friend.id === friendsData.userId
    );

    if (findFriend) {
      setFollowed(true);
    } else {
      setFollowed(false);
    }
  }, [isButtonReady]); // eslint-disable-line

  async function handleFollow() {
    const body = {
      userId: friendsData?.userId,
      friendId: friendId,
    };

    if (followed) {
      setDisableButton(true);

      config.data = body;

      api
        .delete(`/friends/unfollow`, config)
        .then(() => {
          setFollowed(false);
          setDisableButton(false);
          setControlFetch(!controlFetch);

          delete config.data;
        })
        .catch((err) => {
          console.error("⚠ Error unfollowing user", err.response.data);
          alert("⚠ Error unfollowing user");
          setDisableButton(false);

          delete config.data;
        });
    } else {
      setDisableButton(true);
      api
        .post(`/friends/follow`, body, config)
        .then(() => {
          setFollowed(true);
          setDisableButton(false);
          setControlFetch(!controlFetch);
        })
        .catch((err) => {
          console.error("⚠ Error following user", err);
          alert("⚠ Error following user");
          setDisableButton(false);
        });
    }
  }

  return (
    <StyledFollowButton
      onClick={disableButton ? {} : () => handleFollow()}
      followed={followed}
      disabled={disableButton}
      type="button"
      name="followButton"
    >
      <span>
        {isButtonReady ? (
          <p>{followed ? "Unfollow" : "Follow"}</p>
        ) : (
          <ThreeDots color="#fff" width="90%" />
        )}
      </span>
    </StyledFollowButton>
  );
}
