import { useState } from 'react'

import Container from '../../layout/Container/Container'
import SectionHeading from '../../ui/SectionHeading/SectionHeading'
import Button from '../../ui/Button/Button'
import Image from '../../ui/Image/Image'
import introImage from '../../../assets/book/ChatGPTImage10Aug202616_34_41.png'
import styles from './ReadingPreviewSection.module.css'

type Page = {
  heading: string | null
  text: string
}

const groups: { title: string; pages: string[] }[] = [
  {
    title: 'Das Geräusch',
    pages: [
      'Das Geräusch wieder und wieder. Was ist das denn, dachte sie sich und wurde langsam unruhig. Jacke, Jacke wo ist meine Jacke und das Geräusch immer fast zur selben Zeit wo sie einen blick warf. Als sie dann auf einmal auf der anderen Seite des Feuers vom Zelt aus gesehen einen Schatten auf dem Boden sah, der sich ihr näherte. Sie dachte, aber ich bin doch schon groß, das gibt\'s alles nicht. Kurz bevor sie schreiend ins Haus rennen wollte, hörte sie Muho. Muho ist ihre Katze, sie kam ganz galant und völlig entspannt zur ihren Beinen und fing zu schnurren an. Dabei musste sie auf einmal lächeln und sagte Muho!',
    ],
  },
  {
    title: "Opa's Bank",
    pages: [
      'Die Bank, ich liebe diese Bank, ich kann soweit schauen. Die Luft ist voller Sommerfrische und Gedanken. Sie schaute da immer eine Weile und sagte kein Wort wenn sich mal Opa oder Oma da zur Ihr gesellte. Sie sagte, diese majestätische Weite die dort zu sehen ist, schau nur, da, der Baum, der wehte in den Baumkronen ganz lau, der Traktor da drüben schau, der macht Linien die sehen aus wie Karos und den Blüten in Blau, schau der Kirchturm, der spiegelt die Sonne als wäre er ein Stern in dem und der Wonne, schau, da drüben der Einkaufspark in dem Flügel, schau, schau, sagte sie wenn überhaupt etwas, blickend in die wunderschöne Sicht mit dem Himmelsblau.',
      'Oma schaut sie immer an als würde sie gerade Geburtstag haben, aber Omi, kannst du bitte nochmal den Kuchen machen, mit Äpfeln der Glasur und bitte Kakao für mich, kannst du das machen und ich möchte dir helfen, sagte sie eines Nachmittags in der Küche zur Oma. Oma lächelte',
    ],
  },
  {
    title: 'Das Rad am Fenster',
    pages: [
      '...das Rad direkt am Fenster drehend ist. Dabei schaut sie immer aus dem Fenster und denkt sich, wie einer der Projektoren vom Dad. Er schaute da immer drauf um seine Touren auf den Wanderpfaden nochmal zu sehen. Dabei saß er manchmal mit seinen Freuenden zusammen, tranken Bier und erzählten sich die letzte Tour an irgendeinen Berg, Taal, Wald und oder Wiese. Sie wanderten lange immer, manchmal sogar mit Zeltübernachtung. Daher das Einmannzelt, was Sie immer zum Zelten nimmt. Sie war manchmal dabei um sich die Panoramabilder der Umgebung anzusehen. Sie schaut aus dem Fenster...',
    ],
  },
]

const pages: Page[] = groups.flatMap((group) =>
  group.pages.map((text, i) => ({
    heading: i === 0 ? group.title : null,
    text,
  }))
)

export default function ReadingPreviewSection() {
  const [pageIndex, setPageIndex] = useState(0)
  const page = pages[pageIndex]
  const isLastPage = pageIndex === pages.length - 1
  const isFirstOfGroup = page.heading !== null

  return (
    <section id="reading-preview" className={styles.section}>
      <Container size="narrow">
        <SectionHeading
          overline="Leseprobe"
          title="Ein paar Seiten zum Innehalten"
        />
        <div className={styles.intro}>
          <Image
            src={introImage}
            alt="Ein Kind sitzt vor einem leuchtenden geöffneten Buch im Angesicht eines kosmischen Universums, daneben das Buchcover von „Die Kleine und das Universum“"
            className={styles.introImage}
          />
          <div className={styles.introOverlay}>
            <span className={styles.introDivider} aria-hidden="true">
              <span className={styles.introLine} />
              <span className={styles.introStar}>✦</span>
              <span className={styles.introLine} />
            </span>
            <p className={styles.introDescription}>
              {`Ausschnitte aus
Die Kleine und das Universum.

Nimm dir einen Moment Zeit.
Vielleicht beginnt eine Geschichte,
die dich noch ein Stück begleitet.`}
            </p>
            <span className={styles.introDivider} aria-hidden="true">
              <span className={styles.introLine} />
              <span className={styles.introStar}>✦</span>
              <span className={styles.introLine} />
            </span>
          </div>
        </div>
        <div className={styles.book}>
          <article className={styles.page} aria-live="polite">
            {isFirstOfGroup ? (
              <>
                <span className={styles.pageLabel}>Ausschnitt aus dem Buch</span>
                <h3 className={styles.pageTitle}>{page.heading}</h3>
              </>
            ) : (
              <span className={styles.pageLabel}>&nbsp;</span>
            )}
            <p>{page.text}</p>
          </article>
          <div className={styles.navigation} aria-label="Leseprobe navigieren">
            <Button
              type="button"
              variant="outline"
              onClick={() => setPageIndex((index) => index - 1)}
              disabled={pageIndex === 0}
            >
              Zurück
            </Button>
            <span>
              Seite {pageIndex + 1} von {pages.length}
            </span>
            <Button
              type="button"
              onClick={() => setPageIndex((index) => index + 1)}
              disabled={pageIndex === pages.length - 1}
            >
              Weiter
            </Button>
          </div>
          {isLastPage ? (
            <aside className={styles.afterword} aria-label="Übergang zu den Reels">
              <p>
                Jede Geschichte endet irgendwann auf Papier.
                <br />
                Doch manche Gedanken beginnen erst, wenn sie sich bewegen.
              </p>
              <a
                className={styles.afterwordLink}
                href="#reel-opa-bank"
                aria-label="Weich zum ersten Reel scrollen"
              >
                Gedanken als Video erleben
              </a>
            </aside>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
