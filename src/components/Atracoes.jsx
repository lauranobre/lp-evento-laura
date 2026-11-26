import { profissionais } from '../data/evento'
import CartaoAtracao from './CartaoAtracao'

export default function Atracoes() {
  return (
    <section id="atracoes" className="py-14 border-b border-borda">
      <h2 className="text-3xl font-bold text-texto mb-8 text-center">Chefes e Profissionais</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {profissionais.map((prof) => (
          <CartaoAtracao
            key={prof.nome}
            nome={prof.nome}
            profissao={prof.profissao}
          />
        ))}
      </div>
    </section>
  )
}