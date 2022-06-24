import Modal from "react-modal";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../../contexts/UserContext";
import api from "../../../services/api";
import { Container, customStyles } from "./style";

export default function RepostPopUp({ postId, setPopUp, popUp }) {
    const [loading, setLoading] = useState(false);
    const { header, refresh, setRefresh } = UserContext();

    function sendRepost() {
        setLoading(true);
        api.post("/repost", { postId }, header)
            .then(() => {
                setLoading(false);
                setRefresh(!refresh);
                setPopUp(!popUp);
            })
            .catch((error) => {
                setLoading(false);
                setPopUp(!popUp);
                window.alert(
                    "An error occurred while trying to repost, please refresh the page."
                );
            });
    }

    return (
        <Modal
            isOpen={popUp}
            onRequestClose={() => setPopUp(false)}
            style={customStyles}
        >
            <Container>
                <h2>Do you want to re-post this link?</h2>
                {loading ? (
                    <ThreeDots color="#FFFFFF" />
                ) : (
                    <div>
                        <button onClick={() => setPopUp(false)}>
                            No, cancel
                        </button>
                        <button onClick={sendRepost}>Yes, share</button>
                    </div>
                )}
            </Container>
        </Modal>
    );
}