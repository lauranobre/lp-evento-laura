export default function CartaoAtracao({ nome, profissao }) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 text-center">
      <div className="w-16 h-16 bg-orange-100 text-primaria rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4">
        🧑‍🍳
      </div>
      <h3 className="text-xl font-bold text-gray-800">{nome}</h3>
      <p className="text-gray-500 text-sm mt-1">{profissao}</p>
    </article>
  )
}