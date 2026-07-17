import Container from '../../layout/Container/Container'
import SectionHeading from '../../ui/SectionHeading/SectionHeading'
import Card from '../../ui/Card/Card'
import opaBankVideo from '../../../assets/reels/Opa Bank.mov'
import smileVideo from '../../../assets/reels/Sie schaute auf das Lächeln-final.mp4'
import postFourVideo from '../../../assets/reels/DieKleineUndDasUniversumPost4.mov'
import styles from './ReelsSection.module.css'

const reels = [
  {
    title: 'Opa Bank',
    description: 'Englische Sprache mit deutschen Untertiteln als bewusster erster Einstieg.',
    href: 'https://www.instagram.com/maymillynowak/',
    src: opaBankVideo,
  },
  {
    title: 'Sie schaute auf das Lächeln',
    description: 'Ein ruhiger Moment, der den Blick auf Gedanken und Gefühle lenkt.',
    href: 'https://www.instagram.com/maymillynowak/',
    src: smileVideo,
  },
  {
    title: 'Die Kleine und das Universum Post 4',
    description: 'Weitere bewegte Eindrücke aus der poetischen Welt des Buches.',
    href: 'https://www.instagram.com/maymillynowak/',
    src: postFourVideo,
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
                <video
                  className={styles.media}
                  src={reel.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
                <figcaption className="visuallyHidden">Vorschau für {reel.title}</figcaption>
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
