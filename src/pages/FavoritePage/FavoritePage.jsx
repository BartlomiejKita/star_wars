import React from "react";
import { useSelector } from "react-redux";
import FavoriteFetch from "../../components/FavoriteFetch";
import { List } from "../../components/PeopleList/PeopleList.styled";

const FavoritePage = () => {
	const favorite = useSelector((state) => state.favorite);

	return (
		<>
			<List>
				{favorite.map((name) => (
					<FavoriteFetch character={name} key={name} />
				))}
			</List>
		</>
	);
};

export default FavoritePage;
