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
  onEnded: (id: string) => void
  onRegister: (id: string, element: HTMLElement | null) => void
  globalMuted: boolean
  onToggleMute: () => void
  onSelect?: (id: string) => void
}

function ReelCard({ reel, isActive, onEnded, onRegister, onSelect, globalMuted, onToggleMute }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const coverRef = useRef<HTMLElement | null>(null)
  const progressRef = useRef<HTMLDivElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [progress, setProgress] = useState(0)

  const releaseVideo = useCallback(() => {
    const video = videoRef.current

    if (!video) {
      return
    }

    video.pause()
    video.removeAttribute('src')
    video.load()
    setIsPlaying(false)
    setHasPlayed(false)
    setIsPaused(false)
    setIsLoading(false)
    setIsReady(false)
    setProgress(0)
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
          releaseVideo()
        }
      },
      {
        rootMargin: '40% 0px 40% 0px',
        threshold: 0,
      }
    )

    preloadObserver.observe(element)
    onRegister(reel.id, element)

    return () => {
      onRegister(reel.id, null)
      preloadObserver.disconnect()
    }
  }, [onRegister, reel.id, releaseVideo])

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
      setHasPlayed(false)
      setIsPaused(false)
      video.pause()
      setIsPlaying(false)
      return
    }

    if (!isReady) {
      return
    }

    if (isPaused) {
      return
    }

    video.muted = globalMuted
    const playAttempt = video.play()

    if (playAttempt) {
      playAttempt
        .then(() => {
          setIsPlaying(true)
        })
        .catch(() => {
          video.muted = true
          video.play().catch(() => undefined)
        })
    }
  }, [isActive, isReady, shouldLoad, globalMuted, isPaused])

  const handleMediaClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    const video = videoRef.current

    if (!video) {
      return
    }

    if (!isActive) {
      onSelect?.(reel.id)
      return
    }

    if (video.paused) {
      setIsPaused(false)
      video.play()
    } else {
      setIsPaused(true)
      video.pause()
    }
  }

  const handleProgressClick = (e: React.MouseEvent) => {
    const video = videoRef.current

    if (!video || !video.duration) {
      return
    }

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const ratio = Math.max(0, Math.min(1, x / rect.width))
    video.currentTime = ratio * video.duration
  }

  return (
    <Card id={reel.id} className={styles.card} tabIndex={0}>
      <figure className={styles.cover} ref={coverRef}>
        <div className={styles.mediaFrame} onClick={handleMediaClick}>
          <video
            ref={videoRef}
            className={styles.media}
            muted={globalMuted}
            playsInline
            preload="metadata"
            onLoadedMetadata={() => setIsLoading(true)}
            onCanPlay={() => {
              setIsReady(true)
              setIsLoading(false)
            }}
            onWaiting={() => setIsLoading(true)}
            onPlaying={() => {
              setIsLoading(false)
              setIsPlaying(true)
              setHasPlayed(true)
            }}
            onPause={() => setIsPlaying(false)}
            onEnded={() => {
              setIsPlaying(false)
              setIsPaused(false)
              onEnded(reel.id)
            }}
            onTimeUpdate={() => {
              const video = videoRef.current
              if (video && video.duration) {
                setProgress((video.currentTime / video.duration) * 100)
              }
            }}
            aria-hidden="true"
          />
          <div className={`${styles.posterOverlay} ${hasPlayed ? styles.posterOverlayHidden : ''}`}>
            <img src={reel.poster} alt="" aria-hidden="true" />
          </div>
          {isLoading ? <span className={styles.loader} aria-hidden="true" /> : null}
          <button
            type="button"
            className={styles.audioToggle}
            onClick={(e) => {
              e.stopPropagation()
              onToggleMute()
            }}
            aria-pressed={!globalMuted}
            aria-label={
              globalMuted ? `Ton für ${reel.title} aktivieren` : `Ton für ${reel.title} ausschalten`
            }
          >
            <span aria-hidden="true">{globalMuted ? '🔇' : '🔊'}</span>
          </button>
          <div className={styles.progressBar} ref={progressRef} onClick={handleProgressClick}>
            <div className={styles.progressTrack} style={{ width: `${progress}%` }} />
          </div>
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
  const reelElementRefs = useRef<Record<string, HTMLElement | null>>({})
  const [globalMuted, setGlobalMuted] = useState(true)
  const [activeReelId, setActiveReelId] = useState<string>(reels[0].id)

  const handleToggleGlobalMute = () => setGlobalMuted(prev => !prev);
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
              onEnded={handleEnded}
              onRegister={handleRegister}
              onSelect={handleSelectReel}
              globalMuted={globalMuted}
              onToggleMute={handleToggleGlobalMute}
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
