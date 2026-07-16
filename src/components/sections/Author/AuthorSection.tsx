import Container from '../../layout/Container/Container'
import SectionHeading from '../../ui/SectionHeading/SectionHeading'
import Button from '../../ui/Button/Button'
import Image from '../../ui/Image/Image'
import authorImage from '../../../assets/author/author.jpg'
import styles from './AuthorSection.module.css'
import useReveal from '../../../hooks/useReveal'
export default function AuthorSection() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="author" className={`${styles.section} dbx-reveal`} ref={ref as any}>
      <Container>
        <div className={styles.grid}>
          <figure className={styles.image}>
            <Image
              src={authorImage}
              alt="Porträt von Maymilly Nowak, Autorin von Die Kleine und das Universum"
            />
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
