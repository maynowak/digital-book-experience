import Container from "../../layout/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import Card from "../../ui/Card/Card";
import Image from "../../ui/Image/Image";
import reel1 from "../../../assets/reels/reel-1.svg";
import reel2 from "../../../assets/reels/reel-2.svg";
import reel3 from "../../../assets/reels/reel-3.svg";
import styles from "./ReelsSection.module.css";
const reels=[reel1,reel2,reel3];
export default function ReelsSection(){return(<section id="reels" className={styles.section}><Container><SectionHeading overline="Instagram" title="Geschichten in Bewegung" description="Kurze Reels."/><div className={styles.grid}>{reels.map((src,i)=><Card key={i}><Image src={src} alt={`Reel ${i+1}`}/><div className={styles.body}><h3>Reel {i+1}</h3><p>Gedanken in Bewegung.</p></div></Card>)}</div></Container></section>);}