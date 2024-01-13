"use client";
import styles from "./QuizQuestions.module.css";
import { useState, useEffect } from "react";
import $  from "jquery";
import Image from "next/image";
import search from "@/images/search-icon.svg";
import { useRouter } from "next/navigation";

const QuizQuestions = ({ currentQuestion, setCurrentQuestion }) => {
	const router = useRouter();
	let [ movies, setMovies ] = useState([]);
	let [ streaming, setStreaming ] = useState([]);
	let [ genres, setGenres ] = useState([]);
	let [ cast, setCast ] = useState([]);
	let [ searchCast, setSearchCast ] = useState([]);
	let [ availableStreaming, setAvailableStreaming ] = useState();
	let [ wantedGenres, setWantedGenres ] = useState();
	let [ wantedCast, setWantedCast ] = useState([]);
	let [ minYear, setMinYear ] = useState();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/api");
				const data = await response.json();
				setMovies(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, []);
	useEffect(() => {
		const uniqueWatchOptions = new Set();
		movies.forEach(movie => {
			movie.watch_options.forEach(option => {
				uniqueWatchOptions.add(option);
			});
		});
		setStreaming(Array.from(uniqueWatchOptions));
		const uniqueGenres = new Set();
		movies.forEach(movie => {
			movie.genres.forEach(option => {
				uniqueGenres.add(option);
			});
		});
		setGenres(Array.from(uniqueGenres));
		const uniqueCast = new Set();
		movies.forEach(movie => {
			movie.cast.forEach(option => {
				uniqueCast.add(option);
			});
		});
		setCast(Array.from(uniqueCast));

	}, [movies]);
	const updateQuestion = () => {
		let selectedItems = [];
		switch (currentQuestion) {
			case 1:
				selectedItems = [];
				$('#checkboxContainer input[type="checkbox"]').each(function(index) {
					if ($(this).prop('checked')) {
						selectedItems.push(streaming[index]);
					}
				});
				setAvailableStreaming(selectedItems);
				break;
			case 2:
				selectedItems = [];
				$('#dropdownContainer select').each(function () {
					selectedItems.push($(this).val());	
				})
				setWantedGenres(selectedItems)
				break;
			case 4:
				setMinYear($("#year").val());
				break;
			case 5:
				let url = `/quiz/results?${availableStreaming[0] ? "services=" + availableStreaming.join("|") + "&" : ""}${wantedGenres[0] ? "genre=" + wantedGenres.join("|") + "&" : ""}${wantedCast[0] ? "actor=" + wantedCast.join("|") + "&" : ""}${minYear ? "minYear=" + minYear : ""}`;
				router.replace(url);
				break;
		}
		setCurrentQuestion(currentQuestion + 1);
	};
	const displayNone = {
		display: "none"
	};
	const displayVisible = {
		display: "block"
	};
	const cloneContainer = () => {
		const clonedContent = $("#dropdownContainer").clone();
		clonedContent.appendTo("#dropdowns");
	};
	const filterCast = () => {
		let query = $("#searchInput").val();
		let filteredArray = [];
		cast.map(actor => {
			if (actor.toLowerCase().includes(query.toLowerCase())) {
				filteredArray.push(actor);
			}
		});
		setSearchCast(filteredArray)
	};
	const handleWantedCast = actor => {
		setWantedCast([...wantedCast, actor]);
	};
	return (
		<div className={styles.questionsContainer}>
			<div style={currentQuestion == 1 ? displayVisible : displayNone}>
				<p>What services do you have access to?</p>
				<div id="checkboxContainer" className={styles.checkboxContainer}>
					{
						streaming.map(service => {
							return (
								<label className={styles.container}>{service}
									<input type="checkbox" />
									<span className={styles.checkmark}></span>
								</label>
							
							)	
						})
					}
				</div>
			</div>
			<div style={currentQuestion == 2 ? displayVisible : displayNone}>
				<p>Which genre(s) do you like?</p>
				<div id="dropdowns">
					<div id="dropdownContainer" className={styles.dropdownContainer}>
						<select name="genres" className={styles.dropdown}>
							<option value="none" selected disabled hidden>None Selected</option> 
							{
								genres.map(genre => {
									return (
										<option className={styles.dropdownOption} value={genre}>{genre}</option>
									)	
								})
							}
						</select>
					</div>
				</div>
				<div onClick={cloneContainer} className={styles.add}><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div>
			</div>
			<div style={currentQuestion == 3 ? displayVisible : displayNone}>
				<p>See movies with the following actors:</p>
				<div className={styles.searchContainer}>
					<input id="searchInput" type="text" className={styles.filter} placeholder="Type ..." />
					<Image onClick={filterCast} className={styles.search} src={search} alt="Search icon" />
				</div>
				<div className={styles.results}>
					{
						searchCast ? 
						searchCast.map(actor => {
							return (
								<div onClick={() => handleWantedCast(actor)} className={styles.result}>
									{actor}
									<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
								</div>
							)	
						})
						:
						<br />
					}
				</div>
				<div className={styles.selectedActors}>
					{
						wantedCast.map(actor => {
							return (
								<div className={styles.actor}>{actor}</div>
							)	
						})
					}
				</div>
			</div>
			<div style={currentQuestion == 4 ? displayVisible : displayNone}>
				<p>Show me movies made after the year:</p>
				<input id="year" type="number" className={styles.number} />
			</div>
			<button className={styles.nextButton} onClick={updateQuestion}>{currentQuestion == 5 ? "Results" : "Next"}</button>
		</div>
	)
}

export default QuizQuestions;