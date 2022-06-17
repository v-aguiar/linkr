import styled from "styled-components";
import { BsHeart } from "react-icons/bs";
import LinkPreview from "./LinkPreview";
import Hashtag from "./Hashtags";

export default function UserPost({ postData }) {
    const { name, postBody, metaData } = postData;
    const image = postData.image;

    function handleLikes() {
        return (
            <>
                <button>
                    <BsHeart />
                </button>
                <p>13 likes</p>
            </>
        )
    }

    return (
		<PostContainer>
			<section>
				<img className="user" src={image} alt="" />
				{handleLikes()}
			</section>
			<section className="post-body">
				<h2>{name}</h2>
				<p><Hashtag>{postBody}</Hashtag></p>
				<LinkPreview metaData={metaData} />
			</section>
		</PostContainer>
	);

}

const PostContainer = styled.article`
	display: flex;
	width: 100%;
	height: auto;
	padding: 1rem;
	overflow: hidden;
	margin-bottom: 1rem;
	background-color: var(--color-2);
	@media (min-width: 500px) {
			border-radius: 0.8rem;
	}
	& > section {
		display: flex;
		flex-direction: column;
		width: 4rem;
		padding-right: 1rem;
	
		img.user {
			--size-icon: 2.5rem;
			width: var(--size-icon);
			height: var(--size-icon);
			object-fit: cover;
			object-position: center;
			background-repeat: no-repeat;
			border-radius: 50%;
		}
		button {
			background: none;
			padding-block: 0.8rem;
			svg {
				color: var(--text-color-main);
			}
		}
		p {
			width: 100%;
			font-size: 70%;
		}
	}
	&>section.post-body {
		width: calc(100% - 4rem);
		font-weight: var(--font-weight-regular);
		
		h2 {
			margin-bottom: 0.5rem;
			font-size: 1rem;
		}			
		p {
			font-size: 0.9rem;
      color: var(--text-color-secodary);
      margin-bottom: 0.8rem;
		}
	}
`;