import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png";
import Hamburger from "./Hamburger";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Link href="/"><Image src={logo} /></Link>
			<div id="linkContainer" className={styles.linkContainer}>
				<Link className={styles.link} href="/quiz">Quiz</Link>
				<Link className={styles.link} href="/browse-all">Browse All</Link>
				<Link className={styles.link} href="/message">Submit a movie</Link>
			</div>
			<Hamburger />
		</nav>
	)
}

export default Navbar