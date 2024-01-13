import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import bg from "@/images/home-bg.svg";
import cn from "classnames";

const Home = () => {
  return (
    <>
    	<main className={styles.textContainer}>
    		<h1 className={cn(styles.holtwood, styles.orange)}>Watch movies all day</h1>
    		<h1 className={cn(styles.holtwood, styles.blue)}>with Film Fusion</h1>
    		<br />
    		<p className={styles.paragraph}>A free service that helps you find a movie in minutes!</p>
    		<p className={styles.paragraph}>No matter what streaming services you have.</p>
    		<br />
    		<br />
			<Link href="/quiz" className={styles.button}>
				Take The Quiz
			</Link>    		
    	</main>
		<div className={styles.heroBg}>
			<Image src={bg} alt="Roll of film" />
		</div>			
	</>
  )
}

export default Home