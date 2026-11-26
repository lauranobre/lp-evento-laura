import { evento } from '../data/evento'

export default function Cabecalho({ temaEscuro, alternarTema }) {
  return (
    <header className="bg-superficie/90 backdrop-blur-md border-b border-borda sticky top-0 z-50 transition-colors duration-300">
      <nav className="container mx-auto p-4 max-w-4xl flex flex-wrap justify-between items-center gap-4">
        <span className="font-bold text-lg md:text-xl text-primaria flex items-center gap-2">
          <span>🍽️</span> {evento.nome}
        </span>

        <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
          <a href="#sobre" className="text-texto-suave hover:text-primaria font-medium transition-colors">Sobre</a>
          <a href="#programacao" className="text-texto-suave hover:text-primaria font-medium transition-colors">Programação</a>
          <a href="#atracoes" className="text-texto-suave hover:text-primaria font-medium transition-colors">Chefes</a>
          <a href="#inscricao" className="text-texto-suave hover:text-primaria font-medium transition-colors">Ingressos</a>

          <button
            type="button"
            onClick={alternarTema}
            aria-label={temaEscuro ? 'Ativar modo claro' : 'Ativar modo escuro'}
            className="p-2 rounded-lg border border-borda bg-fundo text-texto hover:border-primaria transition-colors cursor-pointer"
            title={temaEscuro ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
          >
            {temaEscuro ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  )
}