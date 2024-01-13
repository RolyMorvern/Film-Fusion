"use client";
import { useState } from "react";
import styles from "./Hamburger.module.css";
import cn from "classnames";
import $ from "jquery";

const Hamburger = () => {
	const [ checked, setChecked ] = useState(false);
	const showNavbar = () => {
		if (!checked) {
			$("#linkContainer").css("display", "flex"); 
			setChecked(true);			
		} else {
			$("#linkContainer").css("display", "none"); 
			setChecked(false);						
		}
	};
	return (
        <button onClick={() => showNavbar()} id="button" className={styles.swallowIcon}>
		  <span></span>
		</button>
	)
}

export default Hamburger