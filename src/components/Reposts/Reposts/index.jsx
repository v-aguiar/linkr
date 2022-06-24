import {useState} from "react";
import { CgRepeat } from "react-icons/cg";
import RepostPopUp from "../RepostPopUp";
import { Container } from "./style";

export default function Reposts({ postId, reposts }) {
    const [popUp, setPopUp] = useState(false);

    function repost(){
        setPopUp(true);
    }
    return (
        <Container>
            <button onClick={repost}>
                <CgRepeat />
            </button>
            <p>{reposts} re-post</p>
            {popUp ? <RepostPopUp postId={postId} setPopUp={setPopUp} popUp={popUp} /> : <></>}
        </Container>
    );
}