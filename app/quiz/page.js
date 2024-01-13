"use client";
import styles from "./page.module.css";
import Image from "next/image";
import bg from "@/images/quiz-bg.svg";
import cn from "classnames";
import QuizQuestions from "@/components/QuizQuestions";
import { useState } from "react";

const Quiz = () => {
	const [currentQuestion, setCurrentQuestion] = useState(1);
	const progressWidth = `${Math.min((currentQuestion - 1) * 24.2, 96.8)}%`;
	return (
		<main className={styles.container}>
			<div className={styles.mainContainer}>
				<div className={styles.progressBar}>
					<div className={cn(styles.progressBackground, styles.progressTrack)}></div>
					<div style={{ width: progressWidth }} className={cn(styles.progressForeground, styles.progressTrack)}></div>
				</div>
				<h1 className={styles.header}>Quiz</h1>
				<p style={{ fontSize: "0.75rem" }}><i><span style={{ color: "red", fontWeight: "bolder", fontSize: "1rem" }}>*</span> To skip questions, just click "Next" with nothing selected.</i></p>
				<QuizQuestions currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}  />
			</div>
			<Image className={styles.bg} alt="Person Taking Quiz" src={bg} />
		</main>
	)
}

export default Quiz