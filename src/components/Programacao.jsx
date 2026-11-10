import { programacao } from '../data/evento'

export default function Programacao() {
  return (
    <section id="programacao" className="py-12 border-b border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Programação do Festival</h2>
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
        {programacao.map((item) => (
          <div key={item.horario} className="p-4 flex gap-4 items-center">
            <span className="font-bold text-primaria min-w-[60px]">{item.horario}</span>
            <span className="text-gray-700">{item.atividade}</span>
          </div>
        ))}
      </div>
    </section>
  )
}