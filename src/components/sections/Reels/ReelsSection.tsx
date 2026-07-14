import Container from "../../layout/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import Card from "../../ui/Card/Card";
import Image from "../../ui/Image/Image";
import styles from "./ReelsSection.module.css";

// Reel assets are pending; render semantic image elements without placeholder artwork.
export default function ReelsSection(){return(<section id="reels" className={styles.section}><Container><SectionHeading overline="Instagram" title="Geschichten in Bewegung" description="Kurze Reels."/><div className={styles.grid}>{[1,2,3].map((i)=><Card key={i}><Image alt={`Reel ${i} (Asset fehlt)`}/><div className={styles.body}><h3>Reel {i}</h3><p>Gedanken in Bewegung.</p></div></Card>)}</div></Container></section>);} 