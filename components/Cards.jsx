"use client";
import { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";

const Cards = props => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(props.api);
				const data = await response.json();
				setMovies(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, [props.api]);
	return (
		<div className={styles.cardsContainer}>
			{
				movies.map(movie => {
					return (
						<Card key={movie.id} link={movie.link} rating={movie.imdb_rating} title={movie.title} backgroundImage={movie.img} tagOne={movie.tags[0]} tagTwo={movie.tags[1]} tagThree={movie.tags[2]} />
					)
				})
			}
		</div>
	);
};

export default Cards;
