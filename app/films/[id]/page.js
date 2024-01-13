"use client";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const Film = () => {
	let id = useParams().id;
	let [ movie, setMovie ] = useState("");
	let [ image, setImage ] = useState("");
	let [ imageTwo, setImageTwo ] = useState("");
	let [ imageThree, setImageThree ] = useState("");
	let [ imageFour, setImageFour ] = useState("");
			
	useEffect(() => {
		const fetchData = async () => {
		try {
			const response = await fetch("/api?id=" + id);
			const data = await response.json();
			setMovie(data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};
		fetchData();
	}, [id]);

	useEffect(() => {
		const fetchImages = async () => {
			try {
				if (!movie || !movie[0] || !movie[0].cast || !movie[0].cast[0]) {
					return;
				}

				const setValidImage = async (index, castMember) => {
					const response = await fetch(
					`https://www.googleapis.com/customsearch/v1?key=AIzaSyDt4psr0VPr17i0FlfM3T-gOhuWhf7HTLY&cx=674bb9fdb29694b5e&searchType=image&q=${castMember} Headshot`
					);
					let data = await response.json();

					if (data.items && data.items.length > 0) {
						const fileFormat = data.items[0].fileFormat;
						if (fileFormat === "image/jpeg" || fileFormat === "image/png") {
							const imageUrl = data.items[0].link;
							switch (index) {
								case 0:
									setImage(imageUrl);
									break;
								case 1:
									setImageTwo(imageUrl);
									break;
								case 2:
									setImageThree(imageUrl);
									break;
								case 3:
									setImageFour(imageUrl);
									break;
								default:
									break;
							}
						}
					}
				};

				await setValidImage(0, movie[0].cast[0]);
				await setValidImage(1, movie[0].cast[1]);
				await setValidImage(2, movie[0].cast[2]);
				await setValidImage(3, movie[0].cast[3]);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		if (movie) {
			fetchImages();
		}
	}, [movie]);

	if (!movie || !movie[0]) {
		return null;
	}
	return (
		<main className={styles.gridContainer}>
			<div style={{ background: `url(${movie[0].img})` }} className={styles.imageContainer}></div>
			<div className={styles.contentContainer}>
				<header className={styles.header}>
					<h1 onClick={() => {console.log(imageFour)}} className={styles.title}>{movie[0].title}</h1>
					<h3 className={styles.subTitle}>{movie[0].imdb_rating}/10 - {movie[0].year}</h3>
				</header>
				<h3>Cast</h3>
				<div className={styles.container}>
					<div className={styles.castMember}>
						<div style={{ background: `url(${image})` }} className={styles.castImg}></div>
						<p>{movie[0].cast[0]}</p>
					</div>
					<div className={styles.castMember}>
						<div style={{ background: `url(${imageTwo})` }} className={styles.castImg}></div>
						<p>{movie[0].cast[1]}</p>
					</div>
					<div className={styles.castMember}>
						<div style={{ background: `url(${imageThree})` }} className={styles.castImg}></div>
						<p>{movie[0].cast[2]}</p>
					</div>
					<div className={styles.castMember}>
						<div style={{ background: `url(${imageFour})` }} className={styles.castImg}></div>
						<p>{movie[0].cast[3]}</p>
					</div>
				</div>
				<h3>Where to watch</h3>
				<div className={styles.container}>
					{
						movie[0].watch_options.map(service => {
							return (
								<div className={styles.logo}>{service}</div>
							)
						})
					}
				</div>
				<h3>Genres</h3>
				<div className={styles.container}>
					<div className={styles.genre}>{movie[0].tags[0]}</div>
					<div className={styles.genre}>{movie[0].tags[1]}</div>
					<div className={styles.genre}>{movie[0].tags[2]}</div>
				</div>
			</div>
			<br />
			<br />
		</main>
	)
}

export default Film