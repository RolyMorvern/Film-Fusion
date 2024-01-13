import styles from "./Card.module.css";
import Link from "next/link";

const Card = ({ backgroundImage, title, rating, tagOne, tagTwo, tagThree, link }) => {
	const cardStyle = {
		backgroundImage: `url(${backgroundImage})`,
	};
	return (
		<Link href={link}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.header}>{title}</h2>
					<div className={styles.ratingContainer}>
						<svg fill="#ebac00" width="100px" height="100px" viewBox="-2.4 -2.4 24.80 24.80" xmlns="http://www.w3.org/2000/svg" stroke="#ebac00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></g></svg>
						<h2 className={styles.rating}>{rating}/10</h2>
					</div>
					<div className={styles.tagsContainer}>
						<div className={styles.tag}>{tagOne}</div>
						<div className={styles.tag}>{tagTwo}</div>
						<div className={styles.tag}>{tagThree}</div>
					</div>
				</div>
				<div className={styles.card} style={cardStyle}>
				</div>
			</div>
		</Link>
	)
}

export default Card;