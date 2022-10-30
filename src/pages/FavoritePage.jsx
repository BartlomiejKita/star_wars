import React, { useState } from "react";
import PeopleList from "../components/PeopleList/PeopleList";
import { useGetPersonQuery } from "../services/SwApi";
import Loader from "../components/Loader";
import { SpinnerWrapper } from "./Navigation/Navigation.styled";
import { Btn, BtnWrapper } from "./HomePage/HomePage.styled";
import { useSelector } from "react-redux";

const FavoritePage = () => {
	const favorite = useSelector((state) => state.favorite);

	const [page, setPage] = useState(1);
	const {
		data: person,
		isLoading,
		isSuccess,
		isError,
		isFetching,
		error,
	} = useGetPersonQuery(favorite.map((person) => person));

	let content;

	if (isLoading || isFetching) {
		content = (
			<SpinnerWrapper>
				<Loader />
			</SpinnerWrapper>
		);
	} else if (isSuccess) {
		let totalPages = Math.ceil(favorite.length / 10);
		if (totalPages > 1) {
			content = (
				<>
					<PeopleList people={person.results} />
					<BtnWrapper>
						{page > 1 ? (
							<Btn onClick={() => setPage(page - 1)}>Previous Page</Btn>
						) : null}
						{page < totalPages ? (
							<Btn onClick={() => setPage(page + 1)}>Next page</Btn>
						) : null}
					</BtnWrapper>
				</>
			);
		} else {
			content = <PeopleList people={person.results} />;
		}
	} else if (isError) {
		content = <div>{error.toString()}</div>;
	}

	return <>{content}</>;
};

export default FavoritePage;
