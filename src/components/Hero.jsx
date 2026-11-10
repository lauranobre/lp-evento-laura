import { evento } from '../data/evento'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primaria to-destaque px-4 py-16 text-center">
      {/* Mantemos o título principal em destaque */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
        {evento.nome}
      </h1>
      
      {/* MUDANÇA AQUI: Alterado para text-gray-900 para dar contraste legível no fundo claro */}
      <p className="text-lg md:text-xl font-medium text-gray-900 max-w-xl mx-auto">
        {evento.slogan}
      </p>
      
      {/* MUDANÇA AQUI: Ajustado o fundo da badge para preto opaco e o texto bem visível */}
      <div className="mt-6 font-bold bg-black/40 text-white inline-block px-4 py-2 rounded-full text-sm">
        📅 {evento.data} · 📍 {evento.local}
      </div>
      
      <div className="mt-8">
        <a href="#inscricao" className="bg-gray-900 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors inline-block min-h-[44px] border border-transparent">
          Garantir Meu Ingresso
        </a>
      </div>
    </section>
  )
}