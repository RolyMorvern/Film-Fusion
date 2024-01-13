"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Card from "@/components/Card";

const Results = () => {
	const [ movies, setMovies ] = useState([]);
	useEffect(() => {
		const fullUrl = window.location.href;
		const cutUrl = fullUrl.split('?')[1];
		const apiUrl = `/api?${cutUrl}`;
		const fetchData = async () => {
			try {
				const response = await fetch(apiUrl);
				const data = await response.json();
				setMovies(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, [movies]);
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
	)
}

export default Results
