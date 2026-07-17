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
    posterLabel: 'Erstes Reel',
  },
  {
    id: 'reel-smile',
    title: 'Sie schaute auf das Lächeln',
    description: 'Ein ruhiger Moment, der den Blick auf Gedanken und Gefühle lenkt.',
    href: 'https://www.instagram.com/maymillynowak/',
    src: smileVideo,
    posterLabel: 'Zweites Reel',
  },
  {
    id: 'reel-post-4',
    title: 'Die Kleine und das Universum Post 4',
    description: 'Weitere bewegte Eindrücke aus der poetischen Welt des Buches.',
    href: 'https://www.instagram.com/maymillynowak/',
    src: postFourVideo,
    posterLabel: 'Drittes Reel',
  },
]

const reelOrder = reels.reduce<Record<string, number>>((accumulator, reel, index) => {
  accumulator[reel.id] = index
  return accumulator
}, {})

function createPoster(title: string, label: string) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#10202d" />
          <stop offset="100%" stop-color="#1b3444" />
        </linearGradient>
      </defs>
      <rect width="800" height="1000" fill="url(#bg)" />
      <rect x="48" y="48" width="704" height="904" rx="32" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
      <text x="92" y="140" fill="rgba(255,255,255,0.72)" font-family="Georgia, serif" font-size="30" letter-spacing="4">${label}</text>
      <text x="92" y="430" fill="#f8f3ea" font-family="Georgia, serif" font-size="64">${title}</text>
      <text x="92" y="860" fill="rgba(255,255,255,0.72)" font-family="Georgia, serif" font-size="28">Maymilly Nowak</text>
    </svg>
  `)}`
}

type Reel = (typeof reels)[number]

type ReelCardProps = {
  reel: Reel
  isActive: boolean
  onVisibilityChange: (id: string, ratio: number) => void
}

function ReelCard({ reel, isActive, onVisibilityChange }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const coverRef = useRef<HTMLElement | null>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)

  const releaseVideo = useCallback(() => {
    const video = videoRef.current

    if (!video) {
      return
    }

    video.pause()
    video.removeAttribute('src')
    video.load()
    setIsPlaying(false)
    setIsLoading(false)
    setIsReady(false)
  }, [])

  useEffect(() => {
    const element = coverRef.current

    if (!element) {
      return
    }

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          setIsLoading(true)
          return
        }

        if (
          entry.boundingClientRect.bottom < -window.innerHeight * 0.35 ||
          entry.boundingClientRect.top > window.innerHeight * 1.35
        ) {
          setShouldLoad(false)
          onVisibilityChange(reel.id, 0)
          releaseVideo()
        }
      },
      {
        rootMargin: '25% 0px 25% 0px',
        threshold: 0,
      }
    )

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        onVisibilityChange(reel.id, entry.isIntersecting ? entry.intersectionRatio : 0)
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: '-12% 0px -12% 0px',
      }
    )

    preloadObserver.observe(element)
    visibilityObserver.observe(element)

    return () => {
      preloadObserver.disconnect()
      visibilityObserver.disconnect()
    }
  }, [onVisibilityChange, reel.id, releaseVideo])

  useEffect(() => {
    const video = videoRef.current

    if (!video || !shouldLoad || video.getAttribute('src')) {
      return
    }

    video.src = reel.src
    video.load()
  }, [reel.src, shouldLoad])

  useEffect(() => {
    const video = videoRef.current

    if (!video) {
      return
    }

    if (!shouldLoad || !isActive) {
      video.pause()
      setIsPlaying(false)
      return
    }

    if (!isReady) {
      return
    }

    video.muted = isMuted
    const playAttempt = video.play()

    if (playAttempt) {
      playAttempt
        .then(() => {
          setIsPlaying(true)
        })
        .catch(() => {
          video.muted = true
          setIsMuted(true)
          video.play().catch(() => undefined)
        })
    }
  }, [isActive, isMuted, isReady, shouldLoad])

  const handleToggleAudio = useCallback(() => {
    const video = videoRef.current

    setIsMuted((current) => {
      const next = !current

      if (video) {
        video.muted = next

        if (isActive) {
          video.play().catch(() => {
            video.muted = true
            return undefined
          })
        }
      }

      return next
    })
  }, [isActive])

  return (
    <Card id={reel.id} className={styles.card}>
      <figure className={styles.cover} ref={coverRef}>
        <video
          ref={videoRef}
          className={styles.media}
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          poster={createPoster(reel.title, reel.posterLabel)}
          onLoadedMetadata={() => setIsLoading(true)}
          onCanPlay={() => {
            setIsReady(true)
            setIsLoading(false)
          }}
          onWaiting={() => setIsLoading(true)}
          onPlaying={() => {
            setIsLoading(false)
            setIsPlaying(true)
          }}
          onPause={() => setIsPlaying(false)}
          aria-hidden="true"
        />
        {isLoading ? <span className={styles.loader} aria-hidden="true" /> : null}
        <button
          type="button"
          className={styles.audioToggle}
          onClick={handleToggleAudio}
          aria-pressed={!isMuted}
          aria-label={
            isMuted ? `Ton für ${reel.title} aktivieren` : `Ton für ${reel.title} ausschalten`
          }
        >
          {isMuted ? '🔇 Ton aus' : '🔊 Ton aktiv'}
        </button>
        <figcaption className="visuallyHidden">
          Vorschau für {reel.title} {isPlaying ? 'wird abgespielt' : 'ist pausiert'}
        </figcaption>
      </figure>
      <div className={styles.body}>
        <h3>{reel.title}</h3>
        <p>{reel.description}</p>
        <a className={styles.link} href={reel.href} target="_blank" rel="noreferrer">
          Auf Instagram ansehen
        </a>
      </div>
    </Card>
  )
}

export default function ReelsSection() {
  const visibilityRef = useRef<Record<string, number>>({})
  const [activeReelId, setActiveReelId] = useState<string | null>(null)

  const handleVisibilityChange = useCallback((id: string, ratio: number) => {
    if (ratio > 0) {
      visibilityRef.current[id] = ratio
    } else {
      delete visibilityRef.current[id]
    }

    const nextActiveReelId =
      Object.entries(visibilityRef.current)
        .sort((left, right) => {
          if (right[1] === left[1]) {
            return reelOrder[left[0]] - reelOrder[right[0]]
          }

          return right[1] - left[1]
        })
        .at(0)?.[0] ?? null

    setActiveReelId((current) => (current === nextActiveReelId ? current : nextActiveReelId))
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
          {reels.map((reel) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              isActive={activeReelId === reel.id}
              onVisibilityChange={handleVisibilityChange}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
