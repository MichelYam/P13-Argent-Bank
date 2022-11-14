import styles from './Style.module.css'

interface IFooter {
    year: number
}
export const Footer = ({ year }: IFooter) => {
    return (
        <footer className={styles.footer}>
            <p className={styles["footer-text"]}>Copyright {year} Argent Bank</p>
        </footer>
    )
}
