import { evento } from '../data/evento'
import BotaoLembrete from './BotaoLembrete'

export default function Hero() {
  return (
    <section className="bg-[#52111B] dark:bg-[#2B090E] border-b-4 border-destaque px-4 py-20 text-center text-[#FAF7F2] transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block uppercase tracking-widest text-xs font-bold text-destaque mb-3">
          Edição Especial · Alta Paulista
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          {evento.nome}
        </h1>

        <p className="text-lg md:text-xl font-normal text-[#EADFD8] max-w-xl mx-auto">
          {evento.slogan}
        </p>

        <div className="mt-6 font-medium bg-black/30 border border-white/15 text-[#FAF7F2] inline-block px-5 py-2 rounded-full text-sm">
          📅 {evento.data} · 📍 {evento.local}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#inscricao"
            className="w-full sm:w-auto bg-destaque text-[#1F1A17] font-bold px-8 py-3.5 rounded-lg shadow-md hover:brightness-110 transition inline-flex items-center justify-center min-h-[48px]"
          >
            Garantir Meu Ingresso
          </a>

          <BotaoLembrete />
        </div>
      </div>
    </section>
  )
}