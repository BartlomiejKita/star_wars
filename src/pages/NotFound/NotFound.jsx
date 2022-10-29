import React from "react";
import { Link } from "react-router-dom";
import { Main, Card, Header } from "./NotFound.styled";

const NotFound = () => {
	return (
		<>
			<Main>
				<Card>
					<Header>Page Not Found</Header>
					<div>
						<p>
							Looks like you've followed a broken link or entered a URL that
							doesn't exist on this site.
						</p>
						<Link to="/">Back to our site</Link>
					</div>
				</Card>
			</Main>
		</>
	);
};

export default NotFound;
