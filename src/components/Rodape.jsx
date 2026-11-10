import { evento } from '../data/evento'

export default function Rodape() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-12 text-sm">
      <p className="font-semibold text-white mb-1">{evento.nome} · {evento.local}</p>
      <p className="italic opacity-70">"Evento fictício criado para fins didáticos"</p>
    </footer>
  )
}