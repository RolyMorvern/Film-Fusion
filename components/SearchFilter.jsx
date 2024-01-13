"use client";
import styles from "./SearchFilter.module.css";
import Image from "next/image";
import search from "@/images/search-icon.svg";

const SearchFilter = ({ clickHandler }) => {
	return (
		<div className={styles.searchContainer}>
			<input id="searchInput" type="text" className={styles.filter} placeholder="Filter by name" />
			<Image onClick={clickHandler} className={styles.search} src={search} alt="Search icon" />
		</div>
	)
}

export default SearchFilter