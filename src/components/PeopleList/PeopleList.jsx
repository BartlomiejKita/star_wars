import PersonDetails from "../PersonDetails/PersonDetails";
import { List } from "./PeopleList.styled";

const PeopleList = ({ people }) => {
	return (
		<>
			<List>
				{people.results.map(
					({
						name,
						height,
						mass,
						hair_color,
						skin_color,
						eye_color,
						birth_year,
						gender,
						url,
					}) => (
						<PersonDetails
							key={url}
							name={name}
							height={height}
							mass={mass}
							hair_color={hair_color}
							skin_color={skin_color}
							eye_color={eye_color}
							birth_year={birth_year}
							gender={gender}
						/>
					)
				)}
			</List>
		</>
	);
};

export default PeopleList;
