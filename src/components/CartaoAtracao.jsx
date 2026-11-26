export default function CartaoAtracao({ nome, profissao }) {
  return (
    <article className="rounded-xl bg-superficie p-6 shadow-sm border border-borda text-center transition-colors">
      <div className="w-16 h-16 bg-destaque/15 border border-destaque/30 text-primaria rounded-full flex items-center justify-center mx-auto text-2xl mb-4">
        🧑‍🍳
      </div>
      <h3 className="text-lg font-bold text-texto">{nome}</h3>
      <p className="text-texto-suave text-sm mt-1">{profissao}</p>
    </article>
  )
}