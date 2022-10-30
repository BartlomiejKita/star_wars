import React from "react";
import { useGetPersonQuery } from "../services/SwApi";
import Loader from "../components/Loader";
import { SpinnerWrapper } from "../pages/Navigation/Navigation.styled";
import FavoriteList from "./FavoriteList";

const FavoriteFetch = ({ character }) => {
	const {
		data: person,
		isLoading,
		isSuccess,
		isError,
		isFetching,
		error,
	} = useGetPersonQuery(character);

	let content;

	if (isLoading || isFetching) {
		content = (
			<SpinnerWrapper>
				<Loader />
			</SpinnerWrapper>
		);
	} else if (isSuccess) {
		content = (
			<>
				<FavoriteList people={person.results} />
			</>
		);
	} else if (isError) {
		content = <div>{error.toString()}</div>;
	}

	return <>{content}</>;
};

export default FavoriteFetch;
