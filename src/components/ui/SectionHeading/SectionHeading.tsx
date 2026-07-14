import styles from "./SectionHeading.module.css";
type Props={overline?:string;title:string;description?:string;centered?:boolean};
export default function SectionHeading({overline,title,description,centered=true}:Props){
return <header className={`${styles.heading} ${centered?styles.center:""}`}>{overline&&<p className={styles.overline}>{overline}</p>}<h2>{title}</h2>{description&&<p className={styles.description}>{description}</p>}</header>}