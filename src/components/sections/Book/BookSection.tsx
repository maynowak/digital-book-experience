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
              title="Die Kleine und das Universum"
              description={"Eine Reise durch Gedanken.\nPoetische Impulse.\nZum Innehalten."}
            />
            <dl className={styles.meta}>
              <div><dt>ISBN</dt><dd>978-3-7529-8566-5</dd></div>
              <div><dt>Format</dt><dd>A5 Softcover</dd></div>
              <div><dt>Seiten</dt><dd>112</dd></div>
              <div><dt>Sprache</dt><dd>Deutsch</dd></div>
              <div><dt>Veröffentlichung</dt><dd>14.08.2020</dd></div>
              <div><dt>Verlag</dt><dd>Books on Demand</dd></div>
            </dl>
            <div className={styles.actions}>
              <Button variant="primary">Leseprobe</Button>
              <Button variant="outline">Zum Buch</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
