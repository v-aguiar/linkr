import { LinkPreviewContainer } from "./style";
import placeholder from "../../assets/images/placeholder.svg";

export default function LinkPreview({ metaData }) {
    const { title, description, postImg, url } = metaData;
    const regex =
        /(https:\/\/|http:\/\/)([^\s(["<,>])*(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/;

    return (
        <LinkPreviewContainer>
            <a href={url} target="_blank" rel="noopener">
                <section>
                    <h1>{title}</h1>
                    <small>{description}</small>
                    <p className="link">{url}</p>
                </section>
                <section>
                    <img
                        src={regex.test(postImg) ? postImg : placeholder}
                        alt=""
                    />
                </section>
            </a>
        </LinkPreviewContainer>
    );
}
