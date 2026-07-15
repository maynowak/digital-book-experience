import Container from '../../layout/Container/Container'
import SectionHeading from '../../ui/SectionHeading/SectionHeading'
import Button from '../../ui/Button/Button'
import styles from './AuthorSection.module.css'
import useReveal from '../../../hooks/useReveal'
export default function AuthorSection() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="author" className={`${styles.section} dbx-reveal`} ref={ref as any}>
      <Container>
        <div className={styles.grid}>
          {/* TODO: Replace placeholder with the real author profile image when available. */}
          <figure className={styles.image}>
            <figcaption className="visuallyHidden">Author image will be integrated</figcaption>
            <div aria-hidden="true">Author image will be integrated</div>
          </figure>
          <div>
            <SectionHeading
              overline="Autorin"
              title="Maymilly Nowak"
              description="Poetische Gedanken und moderne Webentwicklung."
            />
            <Button>Kontakt aufnehmen</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
