import { useState, useContext, useEffect } from "react";
import LinkPreview from "../../components/Link";
import MainScreen from "../../components/MainScreen/";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";
import { PostContainer, Title, PostWrite, WriteContent } from "./style";
import LikeButton from "../../components/LikeButton";

export default function TimelinePage() {
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState(null);
    const { userInfo } = useContext(UserContext);

    const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        },
    };

    async function getPosts() {
        try {
            const obj = await api.get("posts", config);
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
        getPosts();
        getUserId();
    }, []);

    return (
        <MainScreen>
            <Title>timeline</Title>
            <PostWrite>
                <section>
                    <img className="user" src={userInfo.img} alt="" />
                </section>
                <WriteContent>
                    <p>What are you going to share today?</p>
                    <input type="url" name="" placeholder="http://..." />
                    <textarea placeholder="Awesome article about #javascript"></textarea>
                    <div>
                        <button>Publish</button>
                    </div>
                </WriteContent>
            </PostWrite>
            {posts.map((post, index) => {
                const { username, text, userImg, id } = post;
                return (
                    <PostContainer key={index}>
                        <section>
                            <img className="user" src={userImg} alt="" />
                            <LikeButton userId={userId} postId={id} />
                        </section>
                        <div className="post-body">
                            <h2>{username}</h2>
                            <p>{text}</p>
                            <LinkPreview metaData={post} />
                        </div>
                    </PostContainer>
                );
            })}
        </MainScreen>
    );
}
