import { useCallback, useEffect, useRef, useState } from 'react'
import Container from '../Container/Container'
import styles from './Navbar.module.css'

const nav = [
  ['Start', '#hero'],
  ['Buch', '#book'],
  ['Leseprobe', '#reading-preview'],
  ['Gedanken', '#quotes'],
  ['Reels', '#reels'],
  ['Autorin', '#author'],
  ['Kontakt', '#contact'],
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [isOpen, close])

  return (
    <header className={styles.header}>
      <Container size="wide">
        <nav className={styles.nav} aria-label="Hauptnavigation">
          <a href="#hero" className={styles.title}>
            Die Kleine und das Universum
          </a>
          <div className={styles.desktopLinks}>
            {nav.map(([l, h]) => (
              <a key={h} href={h}>
                {l}
              </a>
            ))}
          </div>
          <button
            className={`${styles.burger} ${isOpen ? styles.burgerOpen : ''}`}
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            <span />
            <span />
            <span />
          </button>
          {isOpen && (
            <div className={styles.overlay} onClick={close} ref={menuRef}>
              <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
                {nav.map(([l, h], i) => (
                  <a
                    key={h}
                    href={h}
                    className={styles.mobileLink}
                    style={{ animationDelay: `${i * 50}ms` }}
                    onClick={close}
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  )
}
