import PersonDetails from "../components/PersonDetails/PersonDetails";

const FavoriteList = ({ people }) => {
	return (
		<>
			
				{people.map(
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
							id={url.replace(/[^0-9]/g, "")}
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
			
		</>
	);
};

export default FavoriteList;
