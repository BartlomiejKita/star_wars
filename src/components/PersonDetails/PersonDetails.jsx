import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Card, List, ValuesList } from "./PersonDetails.styled";

const PersonDetails = ({
	name,
	height,
	mass,
	hair_color,
	skin_color,
	eye_color,
	birth_year,
	gender,
}) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const toggleIsFlipped = () => {
		setIsFlipped((current) => !current);
	};

	return (
		<>
			<List>
				<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
					<Card onClick={toggleIsFlipped}>
						<h2>{name}</h2>
					</Card>

					<Card onClick={toggleIsFlipped}>
						<ValuesList>
							<li>height: {height}</li>
							<li>mass: {mass}</li>
							<li>hair color: {hair_color}</li>
							<li>skin color: {skin_color}</li>
							<li>eye color: {eye_color}</li>
							<li>birth year: {birth_year}</li>
							<li>gender: {gender}</li>
						</ValuesList>
					</Card>
				</ReactCardFlip>
			</List>
		</>
	);
};

export default PersonDetails;
