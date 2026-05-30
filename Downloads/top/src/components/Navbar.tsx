'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#inicio" className="nav-logo">
          Biscoitos Mira Mineiro
          <span>Mira Mineiro</span>
        </a>
        <ul className="nav-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#diferenciais">Diferenciais</a></li>
          <li><a href="#onde">Onde Encontrar</a></li>
          <li><a href="#contato" className="nav-cta">Fale Conosco</a></li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={close}>×</button>
        <a href="#sobre" onClick={close}>Sobre</a>
        <a href="#produtos" onClick={close}>Produtos</a>
        <a href="#diferenciais" onClick={close}>Diferenciais</a>
        <a href="#onde" onClick={close}>Onde Encontrar</a>
        <a href="#contato" onClick={close}>Fale Conosco</a>
      </div>
    </>
  )
}
