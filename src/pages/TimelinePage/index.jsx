import { useState, useContext, useEffect } from "react";
import MainScreen from "../../components/MainScreen/";
import Post from "../../components/Post";
import Trending from "../../components/Trending";

import UserContext from "../../contexts/UserContext";
import api from "../../services/api";

import { Title, PostWrite, WriteContent, EmptyPostText } from "./style";
import { Container } from "../HashtagPage/style";

export default function TimelinePage() {
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState(null);
    const { userInfo } = useContext(UserContext);
    const [writePost, setWritePost] = useState({ text: "", url: "" });
    const [submited, setSubmited] = useState(false);
    const [friendsCount, setFriendsCount] = useState(0);

    const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        },
    };

    async function getPosts(id) {
        try {
            const obj = await api.get(`posts/friends/${id}`, config);
            const { data } = obj;
            setPosts(data);
        } catch (error) {
            alert(error.response.data);
        }
    }

    async function getUserId() {
        return await api.get("userId", config);
    }

    async function hasFriends(id) {
        try {
            const { data } = await api.get(`friends/${id}`, config);
            const { count } = data;

            setFriendsCount(count);
        } catch (error) {
            alert(error.response.data);
        }
    }

    function handleInput(e) {
        writePost[e.target.name] = e.target.value;
        setWritePost({ ...writePost });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmited(true);

        const regex =
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

        if (!writePost.url || !regex.test(writePost.url)) {
            setSubmited(false);
            return alert("preencha corretamente o campo de url");
        }

        const promisse = api.post("posts", writePost, config);

        promisse
            .then(() => {
                setSubmited(false);
                setWritePost({ text: "", url: "" });
            })
            .catch(() => {
                setSubmited(false);
                alert("Houve um erro ao publicar seu link");
                return;
            });
    }

    function printOnEmptyPosts() {
        const hasFriends = friendsCount > 0;
        const hasNoFriendsPosts = posts.length === 0;

        if (hasFriends && hasNoFriendsPosts) {
            return (
                <EmptyPostText>No posts found from your friends.</EmptyPostText>
            );
        }

        if (!hasFriends) {
            return (
                <EmptyPostText>
                    You don't follow anyone yet. Search for new friends!
                </EmptyPostText>
            );
        }
    }

    useEffect(() => {
        getUserId()
            .then(({ data }) => {
                setUserId(data.userId);
                hasFriends(data.userId);
                getPosts(data.userId);
            })
            .catch((error) => {
                alert(error.response.data);
            });
    }, []);

    return (
        <Container>
            <MainScreen>
                <Title>timeline</Title>
                <PostWrite>
                    <section>
                        <img className="user" src={userInfo.img} alt="" />
                    </section>
                    <WriteContent onSubmit={handleSubmit} submited={submited}>
                        <p>What are you going to share today?</p>
                        <input
                            disabled={submited}
                            required
                            value={writePost.url}
                            onChange={handleInput}
                            type="url"
                            name="url"
                            placeholder="http://..."
                        />
                        <textarea
                            disabled={submited}
                            value={writePost.text}
                            onChange={handleInput}
                            placeholder="Awesome article about #javascript"
                            name="text"
                        ></textarea>
                        <div>
                            <button type="submit" disabled={submited}>
                                Publish
                            </button>
                        </div>
                    </WriteContent>
                </PostWrite>
                {posts.length === 0
                    ? printOnEmptyPosts()
                    : posts.map((post, index) => {
                          return (
                              <Post info={post} key={index} userId={userId} />
                          );
                      })}
            </MainScreen>
            <Trending />
        </Container>
    );
}
