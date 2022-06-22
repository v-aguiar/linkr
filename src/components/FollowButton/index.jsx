import { useState, useEffect, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";

import { StyledFollowButton } from "./style";

import UserContext from "../../contexts/UserContext";
import api from "../../services/api";

export default function FollowButton({ userId = 6, otherId = 11 }) {
  const [isButtonReady, setIsButtonReady] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [friendsData, setFriendsData] = useState({
    friends: [],
    count: 0,
  });

  const { userInfo } = useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  useEffect(() => {
    const fetchFriends = async () => {
      const friends = await api.get(`/friends/${otherId}`, config);

      setFriendsData(friends.data);
      setIsButtonReady(true);

      if (friends.data?.friends?.length > 0) {
        setFollowed(true);
      }
    };

    fetchFriends();
  }, []); // eslint-disable-line

  useEffect(() => {
    const alreadyFriend = friendsData?.friends.find(
      (friend) => friend.id === userId
    );
    if (alreadyFriend) {
      setFollowed(true);
    }

    setFollowed(false);
    setIsButtonReady(true);
  }, [friendsData]); // eslint-disable-line

  async function handleFollow() {
    const body = {
      userId: userId,
      friendId: otherId,
    };

    if (followed) {
      setDisableButton(true);
      api
        .post(`/friends/unfollow`, body, config)
        .then(() => {
          setFollowed(false);
          setDisableButton(false);
        })
        .catch((err) => {
          console.error("⚠ Error unfollowing user", err);
          setDisableButton(false);
        });
    } else {
      setDisableButton(true);
      api
        .post(`/friends/follow`, body, config)
        .then(() => {
          setFollowed(true);
          setDisableButton(false);
        })
        .catch((err) => {
          console.error("⚠ Error following user", err);
          setDisableButton(false);
        });
    }
  }

  return (
    <StyledFollowButton
      onClick={() => (disableButton ? {} : handleFollow())}
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
