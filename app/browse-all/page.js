"use client";
import styles from "./page.module.css";
import Cards from "@/components/Cards";
import Input from "@/components/SearchFilter";
import { useState } from "react";
import $ from "jquery";

const BrowseAll = () => {
	let [ apiUrl, setApiUrl ] = useState("/api/");
	const updateApiCall = () => {
		let val = $("#searchInput").val();
		let words = val.split(' ');
		let properCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
		let properCaseString = properCaseWords.join(' ');
		let newUrl = `/api?title=${properCaseString}`
		setApiUrl(newUrl);
	}
	return (
		<main className={styles.container}>
			<h1 className={styles.header}>Browse all movies</h1>
			<Input clickHandler={updateApiCall} />
			<Cards api={apiUrl} />
		</main>
	)
}

export default BrowseAll