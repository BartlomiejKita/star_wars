import styled from "styled-components";

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 20px;
	justify-items: center;
	padding: 0 20px;
	list-style-type: none;
`;
