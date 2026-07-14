import Container from "../../layout/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import Image from "../../ui/Image/Image";
import Button from "../../ui/Button/Button";
import styles from "./BookSection.module.css";
export default function BookSection(){return(<section id="book" className={styles.section}><Container><div className={styles.grid}><Image src="/images/book/book-cover.jpg" alt="Buchcover" className={styles.cover}/><div><SectionHeading overline="Das Buch" title="Eine Reise durch Gedanken" description="Poetische Impulse."/><Button variant="outline">Leseprobe</Button></div></div></Container></section>);}