import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { api } from "../utils/api";

export default function TrendingBox() {
	const navigate = useNavigate();
	const [hashtagList, setHashtagList] = useState([]);

	useEffect(() => {

		/* const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			}
		}; */

		api
			.get('/hashtags')
			.then((res) => setHashtagList(res.data))
			.catch((err) => console.error(err));
	}, []); 

	return (
		<Box>
			<h1>trending</h1>
			<div />
			<Article>
				{hashtagList.map((str, index) =>
					   <p onClick={() => navigate(`hashtag/${str}`)}># {str}</p>
				)}
			</Article>
		</Box>
	)
};

const Box = styled.div`
	width: 15rem;
	min-width: 15rem;
	height: 10rem;
  border-radius: 16px;
  background-color: var(--color-5);
  position: relative;
  h1{
	font-family: var(--font-header);
	font-size: 27px;
	position:absolute;
	top:12px;
	left:16px;
  }
  div{
		display: flex;
		width: 100%;
		border: 1px solid var(--color-6);
		position: absolute;
		top: 61px;
  }
`;

const Article = styled.article`
	position: absolute;
	height: 293px;
	top: 83px;
	left: 16px;
	
	p{
		margin-bottom: 10px;
		font-weight: var(--font-weight-bold);
	}
`;