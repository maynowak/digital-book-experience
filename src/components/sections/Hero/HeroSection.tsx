import Container from "../../layout/Container/Container";
import Button from "../../ui/Button/Button";
import styles from "./HeroSection.module.css";
export default function HeroSection(){
return(<section id="hero" className={styles.hero}><Container size="wide"><div className={styles.content}><p>Eine poetische Reise</p><h1>Die Kleine<br/>und das Universum</h1><p>Gedanken über Wahrnehmung und das Leben.</p><Button>Mehr erfahren</Button></div></Container></section>);
}