import Container from '../../layout/Container/Container'
import SectionHeading from '../../ui/SectionHeading/SectionHeading'
import Button from '../../ui/Button/Button'
import Image from '../../ui/Image/Image'
import bookCover from '../../../assets/book/book-cover.webp'
import styles from './BookSection.module.css'
import useReveal from '../../../hooks/useReveal'
export default function BookSection() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="book" className={`${styles.section} dbx-reveal`} ref={ref as any}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.coverFrame}>
            <div className={styles.coverSurface}>
              <Image
                src={bookCover}
                alt="Buchcover: Die Kleine und das Universum von Maymilly Nowak"
                className={styles.cover}
                style={{ height: '100%' }}
              />
            </div>
          </div>
          <div className={styles.details}>
            <SectionHeading
              overline="Das Buch"
              title="Eine Reise durch Gedanken"
              description="Poetische Impulse."
            />
            <div className={styles.actions}>
              <Button variant="outline">Leseprobe</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
