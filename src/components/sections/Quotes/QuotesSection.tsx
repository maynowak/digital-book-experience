import Container from '../../layout/Container/Container'
import SectionHeading from '../../ui/SectionHeading/SectionHeading'
import Card from '../../ui/Card/Card'
import styles from './QuotesSection.module.css'
import useReveal from '../../../hooks/useReveal'
const quotes = [
  'Kinder suchen keine Antworten. Sie entdecken Fragen.',
  'Manchmal genügt ein Gedanke.',
  'Vielleicht beginnt das Universum direkt vor unseren Füßen.',
]
export default function QuotesSection() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="quotes" className={`${styles.section} dbx-reveal`} ref={ref as any}>
      <Container>
        <SectionHeading
          overline="Gedanken"
          title="Kleine Gedanken"
          description="Auszüge aus dem Buch."
        />
        <div className={styles.grid}>
          {quotes.map((q) => (
            <Card key={q}>
              <blockquote>{q}</blockquote>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
