import type { ReactNode } from "react";
import styles from "./Container.module.css";
type Props={children:ReactNode;size?:"narrow"|"default"|"wide";className?:string};
export default function Container({children,size="default",className=""}:Props){
 return <div className={`${styles.container} ${styles[size]} ${className}`}>{children}</div>;
}
