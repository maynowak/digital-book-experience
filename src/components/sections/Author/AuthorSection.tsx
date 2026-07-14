import Container from "../../layout/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import Image from "../../ui/Image/Image";
import Button from "../../ui/Button/Button";
import styles from "./AuthorSection.module.css";
export default function AuthorSection(){return(<section id="author" className={styles.section}><Container><div className={styles.grid}><Image src="/images/author/author.jpg" alt="Autorin" className={styles.image}/><div><SectionHeading overline="Autorin" title="Maymilly Nowak" description="Poetische Gedanken und moderne Webentwicklung."/><Button>Kontakt aufnehmen</Button></div></div></Container></section>);}