import { programacao } from '../data/evento'

export default function Programacao() {
  return (
    <section id="programacao" className="py-14 border-b border-borda">
      <h2 className="text-3xl font-bold text-texto mb-8 text-center">Programação do Festival</h2>
      <div className="max-w-xl mx-auto bg-superficie rounded-xl shadow-sm border border-borda divide-y divide-borda transition-colors">
        {programacao.map((item) => (
          <div key={item.horario} className="p-4 sm:p-5 flex gap-4 items-center">
            <span className="font-bold text-primaria bg-primaria/10 px-3 py-1 rounded-md text-sm min-w-[70px] text-center">
              {item.horario}
            </span>
            <span className="text-texto font-medium">{item.atividade}</span>
          </div>
        ))}
      </div>
    </section>
  )
}