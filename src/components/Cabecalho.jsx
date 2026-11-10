import { evento } from '../data/evento'

export default function Cabecalho() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto p-4 max-w-4xl flex justify-between items-center">
        <span className="font-bold text-xl text-primaria">🍽️ {evento.nome}</span>
        <div className="flex gap-4">
          <a href="#sobre" className="hover:text-primaria font-medium">Sobre</a>
          <a href="#programacao" className="hover:text-primaria font-medium">Programação</a>
          <a href="#atracoes" className="hover:text-primaria font-medium">Chefes</a>
          <a href="#inscricao" className="hover:text-primaria font-medium">Ingressos</a>
        </div>
      </nav>
    </header>
  )
}