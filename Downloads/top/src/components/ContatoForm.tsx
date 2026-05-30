'use client'
import { useState } from 'react'

export default function ContatoForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="contato-section" id="contato">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-header reveal" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', maxWidth: 520 }}>
          <span className="section-label">Fale Conosco</span>
          <h2 className="section-title">Mande sua <em>mensagem</em></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>Dúvidas, parcerias, pedidos? Estamos aqui para atender você.</p>
        </div>
        <div className="contato-wrapper reveal">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Nome</label>
                <input type="text" placeholder="Seu nome completo" required />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input type="email" placeholder="seu@email.com" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Telefone</label>
                <input type="tel" placeholder="(43) 99999-9999" />
              </div>
              <div className="form-group">
                <label>Assunto</label>
                <select>
                  <option>Pedido / Compra</option>
                  <option>Parceria Comercial</option>
                  <option>Dúvidas sobre produtos</option>
                  <option>Outros</option>
                </select>
              </div>
            </div>
            <div className="form-group full">
              <label>Mensagem</label>
              <textarea placeholder="Escreva sua mensagem..." required />
            </div>
            <button type="submit" className="btn-submit">Enviar Mensagem ✉️</button>
            {sent && (
              <div className="form-success">✅ Mensagem enviada! Entraremos em contato em breve.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
