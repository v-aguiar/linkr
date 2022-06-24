import { useEffect, useState } from "react";
import api from "../../services/api";
import ReactHashtag from "@mdnm/react-hashtag";
import { useNavigate } from "react-router-dom";

import { Container } from "./style";

export default function Trending() {
    const [hashtags, setHashtags] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const promisse = api.get("hashtags");

        promisse.then((obj) => {
            const { data } = obj;
            setHashtags([...data]);
        });
    }, []);

    function handleHashtag(val) {
        let hashtag = val.split("#")[1];
        navigate(`/hashtag/${hashtag}`);
        return;
    }

    return (
        <Container>
            <h1>trending</h1>
            <div className="hl"></div>
            <div className="hashtagBox">
                {hashtags.map((hashtag, index) => {
                    hashtag = `#${hashtag}`;
                    return (
                        <h2 key={index}>
                            <ReactHashtag onHashtagClick={handleHashtag}>
                                {hashtag}
                            </ReactHashtag>
                        </h2>
                    );
                })}
            </div>
        </Container>
    );
}
