"use client"
import styles from "./sendEmail.module.css";
import sendEmail from "@/sendEmail";
import $ from "jquery";

const Send = () => {
	const sendMessage = (e) => {
		e.preventDefault();
		let name = $("#name-input").val();
		let movie_name = $("#movie-name-input").val();
		let url = $("#movie-url-input").val();
		let data = {
			name,
			movie_name,
			url
		};
		sendEmail(data);
		alert("Thanks a lot, " + name + ", you have submitted a request");
	};
	return (
		<input className={styles.submit} type="submit" onClick={sendMessage} />
	)
}

export default Send