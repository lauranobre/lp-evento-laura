import { useState, useEffect } from 'react'
import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Programacao from './components/Programacao'
import Atracoes from './components/Atracoes'
import Inscricao from './components/Inscricao'
import Rodape from './components/Rodape'
import Grafico from './components/Grafico'

export default function App() {
  const [temaEscuro, setTemaEscuro] = useState(() => {
    const salvo = localStorage.getItem('tema')
    if (salvo) return salvo === 'escuro'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const html = document.documentElement
    if (temaEscuro) {
      html.classList.add('dark')
      localStorage.setItem('tema', 'escuro')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('tema', 'claro')
    }
  }, [temaEscuro])

  return (
    <div className="min-h-screen bg-fundo text-texto antialiased flex flex-col justify-between transition-colors duration-300">
      <Cabecalho temaEscuro={temaEscuro} alternarTema={() => setTemaEscuro(!temaEscuro)} />

      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4">
          <Sobre />
          <Programacao />
          <Atracoes />
          <Inscricao />
          <Grafico temaEscuro={temaEscuro} />
        </div>
      </main>

      <Rodape />
    </div>
  )
}