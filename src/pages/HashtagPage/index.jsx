import { useParams } from "react-router-dom";
import MainScreen from "../../components/MainScreen";

export default function HashtagPage(){
    const { hashtag } = useParams();

    return (
        <MainScreen route={`hashtag/${hashtag}`} >
            <h1># {hashtag}</h1>
        </MainScreen>
    )
}