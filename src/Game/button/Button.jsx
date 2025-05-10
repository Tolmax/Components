import styles from "./Button.module.css";

function Button({ resetGame }) {
	return (
		<button type="button" className={styles.button} onClick={resetGame}>
			Начать заново
		</button>
	);
}
export default Button;
