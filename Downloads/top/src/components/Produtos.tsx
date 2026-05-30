'use client'
import { useState } from 'react'
import Image from 'next/image'

const produtos = [
  { cat: 'polvilho', name: 'Biscoito de Polvilho', peso: '50g',  img: '/images/POLVILHO_50G_cf.png',              alt: 'Biscoito de Polvilho 50g' },
  { cat: 'polvilho', name: 'Biscoito de Polvilho', peso: '100g', img: '/images/POLVILHO_100G_cf.png',             alt: 'Biscoito de Polvilho 100g' },
  { cat: 'polvilho', name: 'Biscoito de Polvilho', peso: '125g', img: '/images/POLVILHO_125G_cf.png',             alt: 'Biscoito de Polvilho 125g' },
  { cat: 'bacon',    name: 'Salgadinho Bacon',     peso: '45g',  img: '/images/SABOR_BACON_45G_cf.png',           alt: 'Sabor Bacon 45g' },
  { cat: 'bacon',    name: 'Salgadinho Bacon',     peso: '100g', img: '/images/SABOR_BACON_100G_cf.png',          alt: 'Sabor Bacon 100g' },
  { cat: 'bacon',    name: 'Bacon c/ Toque de Limão', peso: '45g', img: '/images/SABOR_BACON_C__LIMA_O_45G_cf.png', alt: 'Bacon com Limão 45g' },
  { cat: 'pipoca',   name: 'Pipoca Doce',          peso: '45g',  img: '/images/PIPOCA_DOCE_45G_cf.png',           alt: 'Pipoca Doce 45g' },
  { cat: 'pipoca',   name: 'Pipoca Doce',          peso: '125g', img: '/images/PIPOCA_DOCE_125G_cf.png',          alt: 'Pipoca Doce 125g' },
]

const filters = [
  { key: 'todos',   label: 'Todos' },
  { key: 'polvilho', label: 'Polvilho' },
  { key: 'bacon',   label: 'Bacon' },
  { key: 'pipoca',  label: 'Pipoca' },
]

export default function Produtos() {
  const [active, setActive] = useState('todos')

  return (
    <section className="produtos" id="produtos">
      <div className="produtos-header">
        <div className="reveal">
          <span className="section-label">Nossos Produtos</span>
          <h2 className="section-title">Sabores que <em>conquistam</em></h2>
        </div>
        <div className="filter-tabs reveal">
          {filters.map(f => (
            <button
              key={f.key}
              className={`filter-tab${active === f.key ? ' active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="produtos-grid">
        {produtos.map((p, i) => (
          <div
            key={i}
            className={`produto-card reveal reveal-delay-${(i % 4) + 1}${active !== 'todos' && active !== p.cat ? ' hidden' : ''}`}
            data-cat={p.cat}
          >
            <div className="produto-card-img">
              <Image src={p.img} alt={p.alt} width={200} height={200} style={{ objectFit: 'contain' }} />
            </div>
            <div className="produto-card-body">
              <span className="produto-tag">{p.cat.charAt(0).toUpperCase() + p.cat.slice(1)}</span>
              <div className="produto-name">{p.name}</div>
              <div className="produto-peso">Peso: {p.peso}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
