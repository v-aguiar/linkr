import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #333333;
`;
export const PostContainer = styled.article`
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
	
		img {
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
	&>div {
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