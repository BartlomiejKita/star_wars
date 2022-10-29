import styled from "styled-components";

export const Main = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	background-color: rgb(52, 56, 60);
`;

export const Card = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 75%;
	max-width: 364px;
	padding: 24px;
	background: white;
	color: rgb(14, 30, 37);
	border-radius: 8px;
	box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.16);
`;
export const Header = styled.h1`
	margin: 0;
	font-size: 22px;
	line-height: 24px;
`;
