import { useCallback, useEffect, useRef, useState } from 'react'

import Container from '../../layout/Container/Container'
import SectionHeading from '../../ui/SectionHeading/SectionHeading'
import Card from '../../ui/Card/Card'
import opaBankVideo from '../../../assets/reels/Opa Bank.mov'
import smileVideo from '../../../assets/reels/Sie schaute auf das Lächeln-final.mp4'
import postFourVideo from '../../../assets/reels/DieKleineUndDasUniversumPost4.mov'
import styles from './ReelsSection.module.css'

const reels = [
  {
    id: 'reel-opa-bank',
    title: 'Opa Bank',
    description: 'Englische Sprache mit deutschen Untertiteln als bewusster erster Einstieg.',
    href: 'https://www.instagram.com/maymillynowak/',
    src: opaBankVideo,
  },
  {
    id: 'reel-smile',
    title: 'Sie schaute auf das Lächeln',
    description: 'Ein ruhiger Moment, der den Blick auf Gedanken und Gefühle lenkt.',
    href: 'https://www.instagram.com/maymillynowak/',
    src: smileVideo,
  },
  {
    id: 'reel-post-4',
    title: 'Die Kleine und das Universum Post 4',
    description: 'Weitere bewegte Eindrücke aus der poetischen Welt des Buches.',
    href: 'https://www.instagram.com/maymillynowak/',
    src: postFourVideo,
  },
]

export default function ReelsSection() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([])
  const activeIndexRef = useRef<number | null>(null)
  const visibilityRef = useRef(new Map<number, number>())
  const [audioEnabled, setAudioEnabled] = useState(false)

  const syncPlayback = useCallback(
    async (nextIndex: number | null) => {
      videoRefs.current.forEach((video, index) => {
        if (!video) {
          return
        }

        const isActive = index === nextIndex

        if (!isActive) {
          video.pause()
          video.currentTime = video.currentTime
          video.muted = true
          return
        }

        video.muted = !audioEnabled
        const playAttempt = video.play()

        if (playAttempt) {
          playAttempt.catch(() => {
            video.muted = true
          })
        }
      })

      activeIndexRef.current = nextIndex
    },
    [audioEnabled],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index)

          if (entry.isIntersecting) {
            visibilityRef.current.set(index, entry.intersectionRatio)
          } else {
            visibilityRef.current.delete(index)
          }
        })

        const nextIndex = [...visibilityRef.current.entries()]
          .sort((left, right) => {
            if (right[1] === left[1]) {
              return left[0] - right[0]
            }

            return right[1] - left[1]
          })
          .at(0)?.[0] ?? null

        if (nextIndex !== activeIndexRef.current) {
          void syncPlayback(nextIndex)
        }
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: '-12% 0px -12% 0px',
      },
    )

    videoRefs.current.forEach((video, index) => {
      if (!video) {
        return
      }

      video.dataset.index = String(index)
      observer.observe(video)
    })

    return () => {
      observer.disconnect()
    }
  }, [syncPlayback])

  useEffect(() => {
    if (activeIndexRef.current !== null) {
      void syncPlayback(activeIndexRef.current)
    }
  }, [audioEnabled, syncPlayback])

  const setVideoRef = useCallback((index: number, element: HTMLVideoElement | null) => {
    videoRefs.current[index] = element
  }, [])

  return (
    <section id="reels" className={styles.section}>
      <Container>
        <SectionHeading
          overline="Instagram"
          title="Geschichten in Bewegung"
          description="Kurze Reels."
        />
        <div className={styles.grid}>
          {reels.map((reel, index) => (
            <Card key={reel.title} id={reel.id}>
              <figure className={styles.cover}>
                <video
                  ref={(element) => setVideoRef(index, element)}
                  className={styles.media}
                  src={reel.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
                <figcaption className="visuallyHidden">Vorschau für {reel.title}</figcaption>
              </figure>
              <div className={styles.body}>
                <h3>{reel.title}</h3>
                <p>{reel.description}</p>
                <button
                  type="button"
                  className={styles.audioToggle}
                  onClick={() => setAudioEnabled((current) => !current)}
                  aria-pressed={audioEnabled}
                >
                  {audioEnabled ? 'Ton ausschalten' : 'Ton aktivieren'}
                </button>
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
