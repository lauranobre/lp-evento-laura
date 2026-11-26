import { evento } from '../data/evento'

export default function Rodape() {
  return (
    <footer className="bg-[#1F1A17] dark:bg-[#0D0B0A] border-t border-borda text-[#B8ADA5] text-center py-8 mt-12 text-sm">
      <p className="font-semibold text-[#FAF7F2] mb-1">{evento.nome} · {evento.local}</p>
      <p className="italic text-[#B8ADA5]">"Evento fictício criado para fins didáticos"</p>
    </footer>
  )
}