import { LinkPreviewContainer } from "./style";

export default function LinkPreview({ metaData }) {
    const { username, text, imgUrl, url } = metaData;
    return (
        <LinkPreviewContainer>
            <a href={url} target="_blank" rel="noopener">
                <section>
                    <h1>{text}</h1>
                    <small>{text}</small>
                    <p className="link">{url}</p>
                </section>
                <section>
                    <img src={imgUrl} alt="" />
                </section>
            </a>
        </LinkPreviewContainer>
    );
}
