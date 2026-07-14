import Container from "../Container/Container";
import styles from "./Footer.module.css";
export default function Footer(){return <footer className={styles.footer}><Container><p>© {new Date().getFullYear()} Maymilly Nowak</p></Container></footer>}