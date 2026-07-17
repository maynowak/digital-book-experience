import { useState } from 'react'

import Container from '../../layout/Container/Container'
import SectionHeading from '../../ui/SectionHeading/SectionHeading'
import Button from '../../ui/Button/Button'
import styles from './ReadingPreviewSection.module.css'

const pages = [
  {
    number: '01',
    text: 'Eines morgens, als die Sonne noch tief stand, war es Spätsommer und Herbstanfang. Ich stand da und schaute in das All.',
  },
  {
    number: '02',
    text: 'Als ich schaute und das Wunderschöne am Horizont mich fast sozusagen umhaute, war ich froh und dankbar.',
  },
  {
    number: '03',
    text: 'Vorne Wald, hinten rot. So wunderschön hat das begonnen.',
  },
]

export default function ReadingPreviewSection() {
  const [pageIndex, setPageIndex] = useState(0)
  const page = pages[pageIndex]
  const isLastPage = pageIndex === pages.length - 1

  return (
    <section id="reading-preview" className={styles.section}>
      <Container size="narrow">
        <SectionHeading
          overline="Leseprobe"
          title="Ein paar Seiten zum Innehalten"
          description="Ein offizieller Auszug aus Die Kleine und das Universum."
        />
        <div className={styles.book}>
          <article className={styles.page} aria-live="polite">
            <span className={styles.pageNumber}>{page.number}</span>
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
