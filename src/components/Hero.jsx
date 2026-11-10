import { evento } from '../data/evento'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primaria to-destaque px-4 py-20 text-white text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{evento.nome}</h1>
      <p className="text-lg md:text-xl mt-4 opacity-90">{evento.slogan}</p>
      <div className="mt-6 font-semibold bg-black/20 inline-block px-4 py-2 rounded-full">
        📅 {evento.data} · 📍 {evento.local}
      </div>
      <div className="mt-8">
        <a href="#inscricao" className="bg-white text-primaria font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-orange-50 transition-colors inline-block min-h-[44px]">
          Garantir Meu Ingresso
        </a>
      </div>
    </section>
  )
}