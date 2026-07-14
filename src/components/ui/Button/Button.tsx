import type {
    ButtonHTMLAttributes,
    ReactNode
} from "react";
import styles from "./Button.module.css";
type Props=ButtonHTMLAttributes<HTMLButtonElement>&{children:ReactNode;variant?:"primary"|"outline";size?:"small"|"medium"|"large"};
export default function Button({children,variant="primary",size="medium",className="",...props}:Props){
return <button className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`} {...props}>{children}</button>;
}