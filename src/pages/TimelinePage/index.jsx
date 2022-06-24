import { useState, useContext, useEffect } from "react";
import LinkPreview from "../../components/Link";
import MainScreen from "../../components/MainScreen/";
import LikeButton from "../../components/LikeButton";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";
import { PostContainer, Title, PostWrite, WriteContent } from "./style";
import ReactHashtag from "@mdnm/react-hashtag";
import { useNavigate } from "react-router-dom";

export default function TimelinePage() {
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState(null);
    const { userInfo } = useContext(UserContext);
    const [writePost, setWritePost] = useState({ text: "", url: "" });
    const [submited, setSubmited] = useState(false);
    const navigate = useNavigate();

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

    function handleHashtag(val) {
        let hashtag = val.split("#")[1];
        navigate(`/hashtag/${hashtag}`);
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
            {posts.map((post, index) => {
                const { username, text, userImg, id } = post;
                return (
                    <PostContainer key={index}>
                        <section>
                            <img className="user" src={userImg} alt="" />
                            {userId ? (
                                <LikeButton userId={userId} postId={id} />
                            ) : (
                                <></>
                            )}
                        </section>
                        <div className="post-body">
                            <h2>{username}</h2>
                            <p>
                                <ReactHashtag onHashtagClick={handleHashtag}>
                                    {text}
                                </ReactHashtag>
                            </p>
                            <LinkPreview metaData={post} />
                        </div>
                    </PostContainer>
                );
            })}
        </MainScreen>
    );
}
