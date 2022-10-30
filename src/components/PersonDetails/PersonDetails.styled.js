import styled from "styled-components";

export const List = styled.li`
	max-width: 300px;
	width: 100%;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
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

export const Btn = styled.button`
	margin: auto auto 40px;
	background-color: #111827;
	border: 1px solid transparent;
	border-radius: 0.75rem;
	box-sizing: border-box;
	color: #ffffff;
	cursor: pointer;
	font-size: 14px;
	font-weight: 600;
	line-height: 0.5rem;
	padding: 0.75rem 0.75rem;
	transition-duration: 0.2s;
	transition-property: background-color, border-color, color, fill, stroke;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	width: 180px;
	:hover {
		background-color: #374151;
	}

	:focus {
		box-shadow: none;
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
`;
