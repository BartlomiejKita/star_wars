import React from "react";
import { useGetPersonQuery } from "../../services/SwApi";
import { Input, Form, NoResults } from "./SearchPage.styled";
import { Btn } from "../HomePage/HomePage.styled";
import PeopleList from "../../components/PeopleList/PeopleList";
import { SpinnerWrapper } from "../Navigation/Navigation.styled";
import Loader from "../../components/Loader";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
	const [searchQuery, setSearchQuery] = useSearchParams();

	const query = searchQuery.get("query");
	let skip = true;
	if (query !== null) {
		skip = false;
	}
	const searchPerson = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formQuery = form.elements.query.value;
		if (formQuery === "") {
			return;
		}
		setSearchQuery({ query: formQuery });

		form.reset();
	};

	const {
		data: person,
		isLoading,
		isSuccess,
		isError,
		isFetching,
		error,
	} = useGetPersonQuery(query, {
		skip,
	});

	let content;

	if (isLoading || isFetching) {
		content = (
			<SpinnerWrapper>
				<Loader />
			</SpinnerWrapper>
		);
	} else if (isSuccess && person.count !== 0) {
		let result = person.results;
		content = <PeopleList people={result} />;
	} else if (isSuccess) {
		content = <NoResults>No results, try again!</NoResults>;
	} else if (isError) {
		content = <div>{error.toString()}</div>;
	}

	return (
		<>
			<Form onSubmit={searchPerson}>
				<Input type="text" placeholder="Type characther's name" name="query" />
				<Btn type="submit">Search Character</Btn>
			</Form>
			{content}
		</>
	);
};

export default SearchPage;
