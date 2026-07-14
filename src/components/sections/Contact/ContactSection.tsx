import Container from "../../layout/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import Button from "../../ui/Button/Button";
import styles from "./ContactSection.module.css";
export default function ContactSection(){return(<section id="contact" className={styles.section}><Container size="narrow"><SectionHeading overline="Kontakt" title="Lass uns ins Gespräch kommen" description="Ich freue mich auf deine Nachricht."/><form className={styles.form}><input placeholder="Name"/><input placeholder="E-Mail"/><textarea placeholder="Nachricht"/><Button>Nachricht senden</Button></form></Container></section>);}