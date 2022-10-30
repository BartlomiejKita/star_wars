import React, { useState } from "react";
import PeopleList from "../../components/PeopleList/PeopleList";
import { useGetPeopleQuery } from "../../services/SwApi";
import Loader from "../../components/Loader";
import { SpinnerWrapper } from "../Navigation/Navigation.styled";
import { Btn, BtnWrapper } from "./HomePage.styled";

const HomePage = () => {
	const [page, setPage] = useState(1);
	const {
		data: people,
		isLoading,
		isSuccess,
		isError,
		isFetching,
		error,
	} = useGetPeopleQuery(page);

	let content;

	if (isLoading || isFetching) {
		content = (
			<SpinnerWrapper>
				<Loader />
			</SpinnerWrapper>
		);
	} else if (isSuccess) {
		let totalPages = Math.ceil(people.count / 10);
		let results = people.results;
		if (totalPages > 1) {
			content = (
				<>
					<PeopleList people={results} />
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
			content = <PeopleList people={results} />;
		}
	} else if (isError) {
		content = <div>{error.toString()}</div>;
	}

	return <>{content}</>;
};

export default HomePage;
