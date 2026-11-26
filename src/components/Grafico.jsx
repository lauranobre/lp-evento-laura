import { useEffect, useRef } from 'react'

const dados = [
  { rotulo: 'Pratos Típicos', valor: 140 },
  { rotulo: 'Doces Regionais', valor: 95 },
  { rotulo: 'Bebidas Artesanais', valor: 75 },
]

function Grafico({ temaEscuro }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const isDark =
      temaEscuro !== undefined
        ? temaEscuro
        : document.documentElement.classList.contains('dark')

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const maior = Math.max(...dados.map((d) => d.valor))
    ctx.font = '600 13px sans-serif'

    const corBarra = isDark ? '#D96B7B' : '#6E1926'
    const corTexto = isDark ? '#F5F0EB' : '#1F1A17'

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 190
      const y = 20 + i * 50

      ctx.fillStyle = corBarra
      ctx.beginPath()
      ctx.roundRect(140, y, largura, 28, 4)
      ctx.fill()

      ctx.fillStyle = corTexto
      ctx.fillText(item.rotulo, 10, y + 19)
      ctx.fillText(item.valor, 140 + largura + 8, y + 19)
    })
  }, [temaEscuro])

  return (
    <section className="px-4 py-14 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-texto">
        Vendas por Categoria
      </h2>
      <p className="mt-2 text-texto-suave">
        Acompanhe o que o público mais pediu no festival
      </p>

      <div className="mt-6 flex justify-center">
        <canvas
          ref={canvasRef}
          width={380}
          height={170}
          role="img"
          aria-label="Gráfico de barras mostrando vendas por categoria: Pratos Típicos com 140, Doces Regionais com 95 e Bebidas Artesanais com 75."
          className="max-w-full border border-borda rounded-xl bg-superficie shadow-sm transition-colors"
        />
      </div>
    </section>
  )
}

export default Grafico