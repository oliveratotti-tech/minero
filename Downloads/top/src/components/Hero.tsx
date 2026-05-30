'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const slides = [
  { src: '/images/banner_2.png', srcMobile: '/images/banner_mobile_2_foto.png', alt: 'Linha completa Mira Mineiro' },
  { src: '/images/foto.png',     srcMobile: null as null, alt: 'Linha de produção' },
  { src: '/images/foto_2.png',   srcMobile: null as null, alt: 'Embalagem biscoito' },
  { src: '/images/foto_3.png',   srcMobile: null as null, alt: 'Fábrica Biscoito Mineiro' },
  { src: '/images/IMG_2372.JPG', srcMobile: null as null, alt: 'Fornos industriais' },
  { src: '/images/IMG_2379.JPG', srcMobile: null as null, alt: 'Interior fábrica' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const total = slides.length

  const go = useCallback((n: number) => {
    setCurrent((n + total) % total)
  }, [total])

  useEffect(() => {
    const t = setInterval(() => go(current + 1), 4500)
    return () => clearInterval(t)
  }, [current, go])

  return (
    <section className="hero" id="inicio">
      {slides.map((s, i) => (
        <div key={i} className={`slide${i === current ? ' active' : ''}`} id={`slide-${i}`}>
          {s.srcMobile ? (
            <>
              <Image src={s.src} alt={s.alt} fill style={{ objectFit: 'cover' }} priority={i === 0} className="slide-img-desktop" />
              <Image src={s.srcMobile} alt={s.alt} fill style={{ objectFit: 'cover' }} priority={i === 0} className="slide-img-mobile" />
            </>
          ) : (
            <Image src={s.src} alt={s.alt} fill style={{ objectFit: 'cover' }} priority={i === 0} />
          )}
          <div className="slide-overlay" style={{ background: 'none' }} />
        </div>
      ))}

      <div className="slider-arrows">
        <button className="arrow-btn" onClick={() => go(current - 1)} aria-label="Anterior">‹</button>
        <button className="arrow-btn" onClick={() => go(current + 1)} aria-label="Próximo">›</button>
      </div>

      <div className="slider-dots">
        {slides.map((_, i) => (
          <button key={i} className={`dot${i === current ? ' active' : ''}`} onClick={() => go(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>

      <div className="slide-counter">
        <span>{String(current + 1).padStart(2, '0')}</span> / {String(total).padStart(2, '0')}
      </div>

      <div className="scroll-indicator">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        Role para baixo
      </div>
    </section>
  )
}
