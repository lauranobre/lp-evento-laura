export default function Sobre() {
  const destaques = [
    { quantidade: '+30', rotulo: 'Expositores e Stands' },
    { quantidade: '15', rotulo: 'Chefes Renomados' },
    { quantidade: '3 dias', rotulo: 'De pura imersão' },
  ]

  return (
    <section id="sobre" className="py-14 border-b border-borda">
      <h2 className="text-3xl font-bold text-texto mb-4 text-center">O Evento</h2>
      <p className="text-texto-suave text-center max-w-2xl mx-auto mb-10 leading-relaxed">
        O festival celebra a riqueza culinária da nossa região, unindo pratos típicos, receitas inovadoras e grandes nomes do setor gastronômico para uma experiência inesquecível.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-2xl mx-auto">
        {destaques.map((item) => (
          <div key={item.rotulo} className="bg-superficie p-6 rounded-xl shadow-sm border border-borda transition-colors">
            <div className="text-3xl font-extrabold text-primaria">{item.quantidade}</div>
            <div className="text-sm text-texto-suave font-medium mt-1">{item.rotulo}</div>
          </div>
        ))}
      </div>
    </section>
  )
}