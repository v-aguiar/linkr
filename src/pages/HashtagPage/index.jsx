import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import Post from "../../components/Post";
import Trending from "../../components/Trending";

import UserContext from "../../contexts/UserContext";
import api from "../../services/api";

import { Title } from "../TimelinePage/style";
import { Container } from "./style";

export default function HashtagPage() {
    const { hashtag } = useParams();
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState(null);
    const { userInfo } = useContext(UserContext);
    const navigate = useNavigate();

    const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        },
    };

    async function getPostsHashtags() {
        try {
            const obj = await api.get(`hashtag/${hashtag}`, config);
            const { data } = obj;
            setPosts(data);
        } catch (error) {
            alert(error.response.data);
        }
    }

    async function getUserId() {
        try {
            const obj = await api.get("userId", config);
            const { data } = obj;
            setUserId(data.userId);
        } catch (error) {
            alert(error.response.data);
        }
    }

    useEffect(() => {
        console.log("teste");
        getPostsHashtags();
        getUserId();
    }, [navigate]);

    return (
        <Container>
            <MainScreen route={`hashtag/${hashtag}`}>
                <Title># {hashtag}</Title>
                {posts.map((post, index) => {
                    return <Post info={post} key={index} userId={userId} />;
                })}
            </MainScreen>
            <Trending />
        </Container>
    );
}
