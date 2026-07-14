import type { HTMLAttributes, ReactNode } from 'react'

import styles from './Card.module.css'

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  hover?: boolean
}

export default function Card({ children, hover = true, className = '', ...props }: Props) {
  return (
    <article className={`${styles.card} ${hover ? styles.hover : ''} ${className}`} {...props}>
      {children}
    </article>
  )
}
