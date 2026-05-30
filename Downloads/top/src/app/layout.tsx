import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Biscoitos Mira Mineiro | Desde 2011',
  description: 'Biscoito de Polvilho, Bacon e Pipoca Doce com o autêntico sabor mineiro. Fundada em 2011, em Sertanópolis – PR.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
