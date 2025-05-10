import styles from "./Information.module.css";

function InformationLayout({ message }) {
	return <div className={styles.title}>{message}</div>;
}

export default InformationLayout;
