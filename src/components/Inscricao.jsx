import { useState } from 'react'
import { ingressos } from '../data/evento'

export default function Inscricao() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [ingresso, setIngresso] = useState(ingressos[0].nome)
  const [enviado, setEnviado] = useState(false)

  function enviar(e) {
    e.preventDefault()
    setEnviado(true)
  }

  if (enviado) {
    return (
      <section className="py-14 max-w-md mx-auto text-center">
        <div role="status" className="p-6 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 rounded-xl font-medium border border-emerald-200 dark:border-emerald-800 shadow-sm">
          <p className="text-lg font-bold mb-2">🎉 Inscrição confirmada!</p>
          <p>Obrigado, <span className="font-bold">{nome}</span>.</p>
          <p className="text-sm mt-2">Seu voucher para o <span className="font-semibold">{ingresso}</span> foi enviado para {email}.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="inscricao" className="py-14 max-w-md mx-auto">
      <div className="bg-superficie p-6 sm:p-8 rounded-2xl border border-borda shadow-sm transition-colors">
        <h2 className="text-2xl font-bold text-texto mb-6 text-center">Garanta sua vaga</h2>
        <form onSubmit={enviar} className="flex flex-col gap-4">
          <label className="flex flex-col text-sm font-semibold text-texto gap-1.5">
            Nome Completo
            <input
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-borda bg-fundo text-texto font-normal focus:outline-2 focus:outline-primaria"
            />
          </label>

          <label className="flex flex-col text-sm font-semibold text-texto gap-1.5">
            E-mail
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-borda bg-fundo text-texto font-normal focus:outline-2 focus:outline-primaria"
            />
          </label>

          <label className="flex flex-col text-sm font-semibold text-texto gap-1.5">
            Tipo de Ingresso
            <select
              value={ingresso}
              onChange={(e) => setIngresso(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-borda bg-fundo text-texto font-normal focus:outline-2 focus:outline-primaria cursor-pointer"
            >
              {ingressos.map((ing) => (
                <option key={ing.id} value={ing.nome}>
                  {ing.nome}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="min-h-[46px] bg-primaria hover:bg-primaria-hover text-white dark:text-[#14110F] font-bold py-3 rounded-lg shadow transition-colors cursor-pointer mt-2"
          >
            Confirmar Presença
          </button>
        </form>
      </div>
    </section>
  )
}