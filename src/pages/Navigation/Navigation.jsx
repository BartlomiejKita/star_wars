import {  Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../../components/Loader";
import { StyledLink, Nav, SpinnerWrapper } from "./Navigation.styled";

function Navigation() {
	return (
		<>
			<Nav>
				<StyledLink to="/" end>
					Home
				</StyledLink>
				<StyledLink to="/search">Search </StyledLink>
				<StyledLink to="/favorite">Favorite </StyledLink>
			</Nav>
			<Suspense
				fallback={
					<SpinnerWrapper>
						<Loader />
					</SpinnerWrapper>
				}>
				<Outlet />
			</Suspense>
		</>
	);
}

export default Navigation;
