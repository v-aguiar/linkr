import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import LinkPreview from "../../components/Link";
import MainScreen from "../../components/MainScreen/";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";
import { PostContainer, Title, PostWrite, WriteContent } from "./style";

export default function TimelinePage() {
    const [posts, setPosts] = useState([]);
    const { userInfo } = useContext(UserContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const promisse = api.get("timeline", config);
        promisse.then((res) => {
            const { data } = res;
            setPosts(data);
        });
        promisse.catch((error) => {
            alert(error.response.data);
        });
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
            {posts.map((post) => {
                const { username, text, imgUrl, url } = post;
                return (
                    <>
                        <PostContainer>
                            <section>
                                <img className="user" src={imgUrl} alt="" />
                                {/* {handleLikes()} */}
                            </section>
                            <div className="post-body">
                                <h2>{username}</h2>
                                <p>{text}</p>
                                <LinkPreview metaData={post} />
                            </div>
                        </PostContainer>
                    </>
                );
            })}
        </MainScreen>
    );
}
