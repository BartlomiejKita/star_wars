import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Card, List, ValuesList, Btn } from "./PersonDetails.styled";
import { addFavorite, deleteFavorite } from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";

const PersonDetails = ({
	id,
	name,
	height,
	mass,
	hair_color,
	skin_color,
	eye_color,
	birth_year,
	gender,
}) => {
	const favorite = useSelector((state) => state.favorite);
	const dispatch = useDispatch();
	const addToFavorite = (e) => {
		e.stopPropagation();
		dispatch(addFavorite(e.target.value));
	};
	const deleteFromFavorite = (e) => {
		e.stopPropagation();
		dispatch(deleteFavorite(e.target.value));
	};
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
						{favorite.includes(name) ? (
							<Btn value={name} onClick={deleteFromFavorite}>
								Remove from favorite
							</Btn>
						) : (
							<Btn value={name} onClick={addToFavorite}>
								Add to favorite
							</Btn>
						)}
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

// remove from favorite
