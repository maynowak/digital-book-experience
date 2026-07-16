import Container from '../../layout/Container/Container'
import SectionHeading from '../../ui/SectionHeading/SectionHeading'
import Card from '../../ui/Card/Card'
import heroImage from '../../../assets/hero/hero.webp'
import styles from './ReelsSection.module.css'

const reels = [
  {
    title: 'Die Kleine und das Universum',
    description: 'Ein poetischer Einblick in die Gedankenwelt des Buches.',
    href: 'https://www.instagram.com/reel/DXmWzftiCDH/',
  },
  {
    title: 'Gedanken in Bewegung',
    description: 'Kleine Momente zum Innehalten und Weiterdenken.',
    href: 'https://www.instagram.com/maymillynowak/',
  },
  {
    title: 'Die Welt der Kleinen',
    description: 'Entdecke weitere Geschichten der Autorin auf Instagram.',
    href: 'https://www.instagram.com/maymillynowak/',
  },
]

export default function ReelsSection() {
  return (
    <section id="reels" className={styles.section}>
      <Container>
        <SectionHeading
          overline="Instagram"
          title="Geschichten in Bewegung"
          description="Kurze Reels."
        />
        <div className={styles.grid}>
          {reels.map((reel) => (
            <Card key={reel.title}>
              <figure className={styles.cover}>
                <img src={heroImage} alt="Naturmotiv aus Die Kleine und das Universum" />
              </figure>
              <div className={styles.body}>
                <h3>{reel.title}</h3>
                <p>{reel.description}</p>
                <a className={styles.link} href={reel.href} target="_blank" rel="noreferrer">
                  Auf Instagram ansehen
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
