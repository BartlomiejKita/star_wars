import React from "react";
import PeopleList from "../components/PeopleList/PeopleList";
import { useGetPeopleQuery } from "../services/SwApi";
import Loader from "../components/Loader";
import { SpinnerWrapper } from "./Navigation/Navigation.styled";

const HomePage = () => {
	const {
		data: people,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetPeopleQuery();

	let content;

	if (isLoading) {
		content = (
			<SpinnerWrapper>
				<Loader />
			</SpinnerWrapper>
		);
	} else if (isSuccess) {
		content = <PeopleList people={people} />;
	} else if (isError) {
		content = <div>{error.toString()}</div>;
	}

	return <>{content}</>;
};

export default HomePage;
