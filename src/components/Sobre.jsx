export default function Sobre() {
  const destaques = [
    { quantidade: '+30', rotulo: 'Expositores e Stands' },
    { quantidade: '15', rotulo: 'Chefes Renomados' },
    { quantidade: '3 dias', rotulo: 'De pura imersão' },
  ]

  return (
    <section id="sobre" className="py-12 border-b border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">O Evento</h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
        O festival celebra a riqueza culinária da nossa região, unindo pratos típicos, receitas inovadoras e grandes nomes do setor gastronômico para uma experiência inesquecível.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-2xl mx-auto">
        {destaques.map((item) => (
          <div key={item.rotulo} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-extrabold text-destaque">{item.quantidade}</div>
            <div className="text-sm text-gray-500 font-medium mt-1">{item.rotulo}</div>
          </div>
        ))}
      </div>
    </section>
  )
}