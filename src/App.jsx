import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Programacao from './components/Programacao'
import Atracoes from './components/Atracoes'
import Inscricao from './components/Inscricao'
import Rodape from './components/Rodape'

export default function App() {
  return (
    <div className="min-h-screen bg-fundo antialiased text-gray-800 flex flex-col justify-between">
      <Cabecalho />
      
      <main className="container mx-auto px-4 flex-1">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Inscricao />
      </main>

      <Rodape />
    </div>
  )
}