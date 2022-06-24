import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { ThreeDots } from "react-loader-spinner";

import UserContext from "../../contexts/UserContext";
import MainScreen from "../../components/MainScreen";
import api from "../../services/api";

import FollowButton from "../../components/FollowButton";
import Post from "../../components/Post";
import Trending from "../../components/Trending";
import { Container, StyledUserSpan } from "./style";
import { EmptyPostText } from "../TimelinePage/style";

export default function UserPage() {
    const [userPageData, setUserPageData] = useState({});
    const [userData, setUserData] = useState({});
    const [posts, setPosts] = useState([]);
    const { id } = useParams();

    const { userInfo } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUserPageData();
        fetchUserPosts();
    }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        fetchUserData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (!userInfo.token) {
        alert("!⚠ Session expired. Please login again.");
        navigate("/");
        return;
    }

    async function fetchUserPageData() {
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        try {
            const response = await api.get(`/user/searchId/${id}`, config);

            setUserPageData(response.data);
        } catch (err) {
            console.error("⚠ Error fetching user page data", err);
        }
    }

    async function fetchUserData() {
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        try {
            const user = await api.get(`/user/session`, config);

            setUserData(user.data);
        } catch (err) {
            console.error("⚠ Error fetching user data", err);
        }
    }

    async function fetchUserPosts() {
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        try {
            const userPosts = await api.get(`posts/user/${id}`, config);

            setPosts(userPosts.data);
        } catch (err) {
            console.error("⚠ Error fetching user posts", err);
        }
    }

    return (
        <Container>
            <MainScreen>
                {userPageData ? (
                    <StyledUserSpan>
                        <span>
                            <img
                                src={userPageData.imgUrl}
                                alt="User profile pic"
                            />
                            <h1> {userPageData.username}'s posts</h1>
                        </span>
                        {userData.userId * 1 === id * 1 ? (
                            <></>
                        ) : (
                            <FollowButton friendId={id} />
                        )}
                    </StyledUserSpan>
                ) : (
                    <ThreeDots />
                )}
                {posts.length === 0 ? (
                    <EmptyPostText>No posts yet...</EmptyPostText>
                ) : (
                    posts.map((post, index) => {
                        return <Post info={post} key={index} userId={id} />;
                    })
                )}
            </MainScreen>
            <Trending />
        </Container>
    );
}
