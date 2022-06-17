import styled from "styled-components";
import { useEffect, useState } from "react";

import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";

import MainScreen from "../../components/MainScreen";
import UserPost from "../../components/Posts/UserPost";
import TrendingBox from "../../components/TrendingBox";
import api from "../../services/api";

export default function UserPage() {
    const [userPosts, setUserPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const { userId } = useParams();

    function showingPosts() {
        if (loading) {
            return <ThreeDots color="#fff" width={"100%"} height={"1.5rem"} />;
        }

        if (userPosts.length === 0) {
            return <h2>There are no posts yet</h2>;
        }

        return userPosts.map((post, id) => (
            <UserPost key={id} postData={post} />
        ));
    }

    function errorGetPosts(e) {
        setLoading(false);
        console.log(e);
        window.alert(
            "An error occurred while trying to fetch the posts, please refresh the page."
        );
    }

    useEffect((userId) => {
        api.get(`user/${userId}`)
            .then((res) => {
                setLoading(false);
                setUserPosts(res.data);
            })
            .catch(errorGetPosts);
    }, []);

    return (
        <MainScreen>
            <PostsContainer>
                {userPosts ? (
                    <div className="title">
                        <img src={userPosts[0].image} alt="" />
                        <h1>{userPosts[0].name}'s posts</h1>
                    </div>
                ) : (
                    <></>
                )}

                {showingPosts()}
            </PostsContainer>
            <TrendingBox />
        </MainScreen>
    );
}

const PostsContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    .title {
        display: flex;
        margin: 60px 0 48px;
    }
    h1 {
        padding-block: 0.8rem;
        font-size: 1.8rem;
        padding-left: 0;
        font-weight: var(--font-weight-bold);
        @media (max-width: 500px) {
            padding-left: 0.8rem;
        }
    }
    .title img{
        width: 50px;
        height: 50px;
        margin-right: 12px;
        object-fit: cover;
        object-position: center;
        background-repeat: no-repeat;
        border-radius: 50%;
    }
    & > h2 {
        padding: 0.8rem;
        color: var(--text-color-secodary);
    }
`;