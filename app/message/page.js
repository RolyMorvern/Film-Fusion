import styles from "./page.module.css";
import cn from "classnames";
import SubmitButton from  "@/components/sendEmail";
import { Metadata } from "next";
import Image from "next/image";
import bgImg from "@/images/submit-bg.svg";

const Submit = () => {
	return (
		<>
			<main className={styles.container}>
				<h1 className={styles.header}>Submit a movie</h1>
				<form className={styles.form}>
					<input id="name-input" className={cn(styles.input)} type="text" placeholder="Enter your name" />
					<input id="movie-name-input" className={cn(styles.input)} type="text" placeholder="Enter the movie's name" />
					<input id="movie-url-input" className={cn(styles.input, styles.url)} type="text" placeholder="Enter the movie's IMDB URL" />
					<SubmitButton />
				</form>
			</main>
			<div className={styles.bg}>
				<Image src={bgImg} alt="Records" />
			</div>
		</>
	)
}

export const metadata = {
  title: 'Submit a movie | Film Fusion',
  description: 'Submit a movie for Film Fusion',
};

export default Submit