import styles from "./Field.module.css";
import Button from "../button/Button";

function FieldLayout({ field, handleClick, resetGame }) {
	return (
		<div className={styles.game}>
			<div className={styles.field}>
				{field.map((cell, index) => (
					<button
						key={index}
						className={styles.cell}
						onClick={() => handleClick(index)}
					>
						{cell}
					</button>
				))}
			</div>
			{/* <button type="button" className={styles.button} onClick={resetGame}>
				Начать заново
			</button> */}
			<Button resetGame={resetGame} />
		</div>
	);
}

export default FieldLayout;
