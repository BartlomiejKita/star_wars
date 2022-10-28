import styled from "styled-components";

export const List = styled.li`
	max-width: 300px;
	width: 100%;
`;

export const Card = styled.div`
	text-align: center;
	height: 250px;
	max-width: 300px;
	width: 100%;
	border: 1px solid #ffe81f;
	border-radius: 10px;
	background-color: #ffe81f;
	&:hover {
		border-color: black;
		box-shadow: 0 4px 2px 1px black black;
	}
`;

export const ValuesList = styled.ul`
	margin-top: 20px;
	text-transform: uppercase;
`;
