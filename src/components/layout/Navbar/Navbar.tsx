import Container from '../Container/Container'
import styles from './Navbar.module.css'
const nav = [
  ['Start', '#hero'],
  ['Buch', '#book'],
  ['Gedanken', '#quotes'],
  ['Reels', '#reels'],
  ['Autorin', '#author'],
  ['Kontakt', '#contact'],
]
export default function Navbar() {
  return (
    <header className={styles.header}>
      <Container size="wide">
        <nav className={styles.nav} aria-label="Hauptnavigation">
          {nav.map(([l, h]) => (
            <a key={h} href={h}>
              {l}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  )
}
