import React, { useState, useEffect } from "react";
import axios from "axios";

import { CommentsBox, Comment } from "./style";

export default function Comments({ postId, showComment, commentPoster }) {
    const URL = `${process.env.REACT_APP_API_URL}`

    const [comments, setComments] = useState([]);
    const [follows, setFollows] = useState([]);

    function getComments() {
        axios
            .get(`${process.env.REACT_APP_API_URL}/comments/${postId}`)
            .then((response) => {
                console.log("🚀 ~ response", response)
                setComments([...response.data])
            })
            .catch((error) => {
                console.log("🚀 ~ error", error)
            })
    }

    function getFollows() {
        axios
            .get(`${process.env.REACT_APP_API_URL}/comments/follows/${commentPoster}`)
            .then((response) => {
                setFollows([...response.data])
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getComments()
        getFollows()
    }, [])

    return (
        <CommentsBox showComment={showComment}>
            {
                comments.map((comment) => (
                    <Comment>
                        <img src={comment.userImage} alt={comment.username} />
                        <div>
                            <h3>
                                <h1>{comment.username}</h1>
                                <h2>{commentPoster === comment.userId ? `• post's author` : ''}</h2>
                                <h2>{follows.includes(comment.userId) ? `• following` : ''}</h2>
                            </h3>
                            <p>{comment.message}</p>
                        </div>
                    </Comment>
                ))}

        </CommentsBox>
    )
}