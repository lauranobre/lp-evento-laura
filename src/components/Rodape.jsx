import { evento } from '../data/evento'

export default function Rodape() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-12 text-sm">
      <p className="font-semibold text-white mb-1">{evento.nome} · {evento.local}</p>
      {/* CORRIGIDO: Removido opacity-70 e aplicado text-gray-300 para contraste perfeito */}
      <p className="italic text-gray-300">"Evento fictício criado para fins didáticos"</p>
    </footer>
  )
}