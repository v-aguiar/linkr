import { useState, useEffect, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";

import { StyledFollowButton } from "./style";

import UserContext from "../../contexts/UserContext";
import api from "../../services/api";

export default function FollowButton({ friendId }) {
    const [isButtonReady, setIsButtonReady] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const [controlFetch, setControlFetch] = useState(false);
    const [followed, setFollowed] = useState(false);
    const [friendsData, setFriendsData] = useState({});
    const [userData, setUserData] = useState({});

    const { userInfo } = useContext(UserContext);

    const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        },
    };

    useEffect(() => {
        async function fetchUserData() {
            try {
                const user = await api.get(`/user/session`, config);

                console.log("userData: ", user.data);

                setUserData(user.data);
                setControlFetch(controlFetch ? false : true);
            } catch (err) {
                console.error("⚠ Error fetching user data", err);
            }
        }

        fetchUserData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                const friends = await api.get(
                    `/friends/${userData.id}`,
                    config
                );

                setFriendsData(friends.data);
                setIsButtonReady(true);
            } catch (err) {
                console.error("⚠ Error fetching friends data", err);
            }
        };

        if (userData?.id) {
            fetchFriends();
        }
    }, [controlFetch]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const alreadyFriends = friendsData?.friends;
        const findFriend = alreadyFriends?.find(
            (friend) => friend.id * 1 === friendId * 1
        );

        if (findFriend) {
            setFollowed(true);
        } else {
            setFollowed(false);
        }
    }, [isButtonReady, friendsData, friendId]); // eslint-disable-line react-hooks/exhaustive-deps

    async function handleFollow() {
        const body = {
            userId: userData.id,
            friendId: friendId * 1,
        };

        if (followed) {
            setDisableButton(true);

            config.data = body;

            try {
                await api.delete(`/friends/unfollow`, config);

                setFollowed(false);
                setDisableButton(false);
                setControlFetch(controlFetch ? false : true);

                delete config.data;
            } catch (err) {
                console.error("⚠ Error unfollowing user", err.response.data);
                alert("⚠ Error unfollowing user");
                setDisableButton(false);

                delete config.data;
            }
        } else {
            setDisableButton(true);

            try {
                await api.post(`/friends/follow`, body, config);
                setFollowed(true);
                setDisableButton(false);
                setControlFetch(controlFetch ? false : true);
            } catch (err) {
                console.error("⚠ Error following user", err);
                alert("⚠ Error following user");
                setDisableButton(false);
            }
        }
    }

    return (
        <StyledFollowButton
            onClick={disableButton ? () => {} : handleFollow}
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
