import { useState } from "react";

import type {
    ImgHTMLAttributes
} from "react";
import styles from "./Image.module.css";
type Props=ImgHTMLAttributes<HTMLImageElement>&{fallback?:string};
export default function Image({src,alt,fallback="/images/placeholder.jpg",className="",...props}:Props){
const [current,setCurrent]=useState(src);return <img src={current} alt={alt} className={`${styles.image} ${className}`} onError={()=>setCurrent(fallback)} loading="lazy" decoding="async" {...props}/>;}