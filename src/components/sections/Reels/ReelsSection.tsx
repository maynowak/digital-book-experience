import { useCallback, useEffect, useRef, useState } from 'react'

import Container from '../../layout/Container/Container'
import SectionHeading from '../../ui/SectionHeading/SectionHeading'
import Card from '../../ui/Card/Card'
import opaBankVideo from '../../../assets/reels/Opa Bank.mov'
import smileVideo from '../../../assets/reels/Sie schaute auf das Lächeln-final.mp4'
import postFourVideo from '../../../assets/reels/DieKleineUndDasUniversumPost4.mov'
import opaBankPoster from '../../../assets/reels/posters/opa-bank.jpg'
import smilePoster from '../../../assets/reels/posters/sie-schaute.jpg'
import postFourPoster from '../../../assets/reels/posters/die-kleine-post4.jpg'
import styles from './ReelsSection.module.css'

const reels = [
  {
    id: 'reel-opa-bank',
    title: 'Opa Bank',
    description: 'Englische Sprache mit deutschen Untertiteln als bewusster erster Einstieg.',
    href: 'https://www.instagram.com/maymillynowak/',
    src: opaBankVideo,
    poster: opaBankPoster,
  },
  {
    id: 'reel-smile',
    title: 'Sie schaute auf das Lächeln',
    description: 'Ein ruhiger Moment, der den Blick auf Gedanken und Gefühle lenkt.',
    href: 'https://www.instagram.com/maymillynowak/',
    src: smileVideo,
    poster: smilePoster,
  },
  {
    id: 'reel-post-4',
    title: 'Die Kleine und das Universum Post 4',
    description: 'Weitere bewegte Eindrücke aus der poetischen Welt des Buches.',
    href: 'https://www.instagram.com/maymillynowak/',
    src: postFourVideo,
    poster: postFourPoster,
  },
]

const reelOrder = reels.reduce<Record<string, number>>((accumulator, reel, index) => {
  accumulator[reel.id] = index
  return accumulator
}, {})

type Reel = (typeof reels)[number]

type ReelCardProps = {
  reel: Reel
  isActive: boolean
  onVisibilityChange: (id: string, ratio: number) => void
  onEnded: (id: string) => void
  onRegister: (id: string, element: HTMLElement | null) => void
}

function ReelCard({ reel, isActive, onVisibilityChange, onEnded, onRegister }: ReelCardProps) {
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
    onRegister(reel.id, element)

    return () => {
      onRegister(reel.id, null)
      preloadObserver.disconnect()
      visibilityObserver.disconnect()
    }
  }, [onRegister, onVisibilityChange, reel.id, releaseVideo])

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
        <div className={styles.mediaFrame}>
          <img
            className={`${styles.poster} ${isPlaying ? styles.posterHidden : ''}`}
            src={reel.poster}
            alt=""
            aria-hidden="true"
          />
          <video
            ref={videoRef}
            className={styles.media}
            muted={isMuted}
            playsInline
            preload="metadata"
            poster={reel.poster}
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
            onEnded={() => {
              setIsPlaying(false)
              onEnded(reel.id)
            }}
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
            <span aria-hidden="true">{isMuted ? '🔇' : '🔊'}</span>
          </button>
        </div>
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
  const reelElementRefs = useRef<Record<string, HTMLElement | null>>({})
  const [activeReelId, setActiveReelId] = useState<string | null>(null)

  const scrollToReel = useCallback((id: string) => {
    const element = reelElementRefs.current[id]

    if (!element) {
      return
    }

    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])

  const handleRegister = useCallback((id: string, element: HTMLElement | null) => {
    reelElementRefs.current[id] = element
  }, [])

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

  const handleEnded = useCallback(
    (id: string) => {
      const currentIndex = reelOrder[id]
      const nextReel = reels[currentIndex + 1]

      if (!nextReel) {
        return
      }

      setActiveReelId(nextReel.id)
      scrollToReel(nextReel.id)
    },
    [scrollToReel]
  )

  const handleSelectReel = useCallback(
    (id: string) => {
      setActiveReelId(id)
      scrollToReel(id)
    },
    [scrollToReel]
  )

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
              onEnded={handleEnded}
              onRegister={handleRegister}
            />
          ))}
        </div>
        <div className={styles.pagination} aria-label="Reels Navigation" role="tablist">
          {reels.map((reel, index) => {
            const isSelected = activeReelId === reel.id

            return (
              <button
                key={reel.id}
                type="button"
                className={`${styles.paginationDot} ${isSelected ? styles.paginationDotActive : ''}`}
                aria-label={`Reel ${index + 1}: ${reel.title}`}
                aria-pressed={isSelected}
                onClick={() => handleSelectReel(reel.id)}
              >
                <span aria-hidden="true">{isSelected ? '●' : '○'}</span>
              </button>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
