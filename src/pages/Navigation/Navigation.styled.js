import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
	font-weight: bold;
	font-size: 20px;
	color: black;
	&.active {
		color: #ab1822;
	}
`;

export const Nav = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	box-shadow: 0 4px 2px 1px black;
	padding: 15px 0;
	margin: 25px auto;
	background: #ffe81f;
	max-width: 400px;
	border-radius: 10px;
`;

export const SpinnerWrapper = styled.div`
	position: fixed;
	top: 40%;
	left: 50%;
	transform: translate(-40%, -50%);
`;
