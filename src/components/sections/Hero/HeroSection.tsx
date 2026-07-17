import Container from '../../layout/Container/Container'
import Button from '../../ui/Button/Button'
import heroImage from '../../../assets/hero/hero.webp'
import styles from './HeroSection.module.css'
export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
      <div className={styles.overlay} />
      <Container size="wide">
        <div className={styles.content}>
          <p className={styles.label}>Eine poetische Reise</p>
          <h1>
            Die Kleine
            <br />
            und das Universum
          </h1>
          <p className={styles.lead}>Gedanken über Wahrnehmung und das Leben.</p>
          <div className={styles.actions}>
            <Button>Mehr erfahren</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
