import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Produtos from '@/components/Produtos'
import ContatoForm from '@/components/ContatoForm'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* STATS */}
      <div className="stats-strip">
        <div className="stat-item reveal">
          <span className="stat-num">15+</span>
          <span className="stat-label">Anos de mercado</span>
        </div>
        <div className="stat-item reveal reveal-delay-1">
          <span className="stat-num">100%</span>
          <span className="stat-label">Sabor Mineiro</span>
        </div>
        <div className="stat-item reveal reveal-delay-2">
          <span className="stat-num">♥</span>
          <span className="stat-label">Feito com amor</span>
        </div>
      </div>

      {/* SOBRE */}
      <section className="sobre" id="sobre">
        <div className="sobre-grid">
          <div className="sobre-visual reveal">
            <Image src="/images/foto_3.png" alt="Fábrica Biscoitos Mira Mineiro" className="sobre-img-main" width={600} height={420} style={{ objectFit: 'cover' }} />
            <div className="sobre-badge-float">
              <strong>2011</strong>Fundados com<br />paixão e tradição
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="section-header">
              <span className="section-label">Quem Somos</span>
              <h2 className="section-title">Mais de <em>15 anos</em><br />de tradição e sabor</h2>
              <p className="section-sub">
                Fundada em 2011, a <strong>Biscoitos Mira Mineiro</strong> nasceu do sonho de levar o autêntico sabor do biscoito de polvilho para toda a região. Localizada no Conjunto Industrial São José, em Sertanópolis – PR, nossa fábrica combina receitas tradicionais com processos modernos para garantir qualidade e sabor em cada pacote.
              </p>
              <p className="section-sub" style={{ marginTop: 14 }}>
                Hoje somos presença certa nas prateleiras, nas festas e nas mesas de família de todo o norte do Paraná e além.
              </p>
            </div>
            <ul className="valores-list">
              <li><span className="val-icon">✓</span><div><strong>Ingredientes selecionados:</strong> Polvilho e matérias-primas de alta qualidade para um sabor inconfundível.</div></li>
              <li><span className="val-icon">✓</span><div><strong>Receita artesanal:</strong> Processo que preserva a crocância e o sabor da tradição mineira.</div></li>
              <li><span className="val-icon">✓</span><div><strong>Compromisso com a família:</strong> Produtos pensados para todos: crianças, adultos e toda a família.</div></li>
              <li><span className="val-icon">✓</span><div><strong>Indústria brasileira:</strong> Orgulhosamente feito no Paraná, com o coração em Minas Gerais.</div></li>
            </ul>
          </div>
        </div>
      </section>

      <Produtos />

      {/* BANNER COLLAGE */}
      <div className="banner-collage">
        <div className="banner-collage-inner">
          <div className="banner-col">
            <Image src="/images/banner_2.png" alt="Biscoitos espalhados Mira Mineiro" fill style={{ objectFit: 'cover' }} />
            <div className="banner-overlay">
              <div className="banner-overlay-text">Variedade<em>pra toda família</em></div>
            </div>
          </div>
          <div className="banner-col">
            <Image src="/images/banner_1_P.png" alt="Quem prova se apaixona" fill style={{ objectFit: 'cover' }} />
            <div className="banner-overlay">
              <div className="banner-overlay-text">Quem prova<em>se apaixona!</em></div>
            </div>
          </div>
        </div>
      </div>

      {/* DIFERENCIAIS */}
      <section className="diferenciais" id="diferenciais">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-header reveal" style={{ maxWidth: 520 }}>
            <span className="section-label" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>Por que escolher</span>
            <h2 className="section-title">O que nos torna <em>especiais</em></h2>
            <p className="section-sub">Cada detalhe do nosso processo é pensado para entregar o melhor biscoito da prateleira.</p>
          </div>
          <div className="diff-grid">
            {[
              { icon: '🏭', title: 'Produção própria', text: 'Fabricamos tudo na nossa planta industrial em Sertanópolis-PR, com controle total da qualidade desde a matéria-prima.' },
              { icon: '🌽', title: 'Ingredientes de qualidade', text: 'Polvilho, temperos e demais insumos cuidadosamente selecionados para preservar o sabor autêntico da tradição.' },
              { icon: '❤️', title: 'Feito com carinho', text: 'Uma equipe dedicada que acredita no produto e cuida de cada lote como se fosse o primeiro.' },
              { icon: '📦', title: 'Variedade de tamanhos', text: 'Embalagens de 45g, 50g, 100g e 125g para atender desde o lanche individual até o consumo familiar.' },
            ].map((d, i) => (
              <div key={i} className={`diff-card reveal reveal-delay-${i + 1}`}>
                <div className="diff-icon">{d.icon}</div>
                <div className="diff-title">{d.title}</div>
                <p className="diff-text">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONDE ENCONTRAR */}
      <section className="onde" id="onde">
        <div className="onde-grid">
          <div className="reveal">
            <span className="section-label">Localização</span>
            <h2 className="section-title">Onde nos <em>encontrar</em></h2>
            <p className="section-sub" style={{ marginBottom: 32 }}>Nossa fábrica e escritório ficam em Sertanópolis-PR. Entre em contato para saber onde comprar na sua cidade.</p>
            <div className="contato-info">
              <div className="contato-item">
                <div className="contato-icon-wrap">📍</div>
                <div>
                  <div className="contato-label">Endereço</div>
                  <div className="contato-value">Rua Laudelina de Melo Casagrande, 342<br />Conjunto Industrial São José<br />Sertanópolis – PR</div>
                </div>
              </div>
              <div className="contato-item">
                <div className="contato-icon-wrap">📱</div>
                <div>
                  <div className="contato-label">Telefone</div>
                  <div className="contato-value"><a href="tel:554332322982">(43) 3232-2982</a></div>
                </div>
              </div>
              <div className="contato-item">
                <div className="contato-icon-wrap">✉️</div>
                <div>
                  <div className="contato-label">E-mail</div>
                  <div className="contato-value"><a href="mailto:biscoitomineiro@gmail.com">biscoitomineiro@gmail.com</a></div>
                </div>
              </div>
              <div className="qr-section">
                <Image src="/images/adobe-express-qr-code-2.png" alt="QR Code WhatsApp" width={80} height={80} style={{ borderRadius: 8 }} />
                <div className="qr-text">Escaneie o QR Code para entrar em contato pelo WhatsApp!</div>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="mapa-placeholder">
              <div className="mapa-icon-wrap">🗺️</div>
              <p className="mapa-addr">
                <strong>Biscoitos Mira Mineiro</strong><br />
                Rua Laudelina de Melo Casagrande, 342<br />
                Conj. Industrial São José<br />
                Sertanópolis – PR
              </p>
              <a href="https://maps.google.com/?q=Sertanópolis,PR,Brasil" target="_blank" rel="noopener noreferrer" className="mapa-link">
                Abrir no Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContatoForm />

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Biscoitos Mira Mineiro</div>
            <p className="footer-tagline">Desde 2011 levando o autêntico sabor dos biscoitos mineiros para as mesas de todo o Brasil. Quem prova, se apaixona.</p>
          </div>
          <div className="footer-col">
            <h4>Navegação</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#onde">Onde Encontrar</a></li>
              <li><a href="#contato">Fale Conosco</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contato</h4>
            <ul className="footer-links">
              <li><a href="tel:554332322982">(43) 3232-2982</a></li>
              <li><a href="mailto:biscoitomineiro@gmail.com">biscoitomineiro@gmail.com</a></li>
              <li><a href="#">Sertanópolis – PR</a></li>
              <li style={{ marginTop: 12 }}>
                <a href="https://wa.me/554332322982" style={{ background: 'var(--red)', color: '#fff', padding: '8px 16px', borderRadius: 50, fontWeight: 700, fontSize: '0.8rem' }}>
                  💬 WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Biscoitos Mira Mineiro. Todos os direitos reservados. | Sertanópolis – PR
        </div>
      </footer>

      {/* WHATSAPP FAB */}
      <a href="https://wa.me/554332322982" className="whatsapp-fab" target="_blank" rel="noopener noreferrer" title="Fale pelo WhatsApp">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <RevealScript />
    </>
  )
}

function RevealScript() {
  return (
    <script dangerouslySetInnerHTML={{
      __html: `
        (function(){
          var obs = new IntersectionObserver(function(entries){
            entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('visible'); });
          }, { threshold: 0.12 });
          document.querySelectorAll('.reveal').forEach(function(el){ obs.observe(el); });
        })();
      `
    }} />
  )
}
