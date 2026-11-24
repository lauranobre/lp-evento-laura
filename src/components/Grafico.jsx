import { useEffect, useRef } from "react";

const dados = [
  { rotulo: "Pratos Típicos", valor: 140 },
  { rotulo: "Doces Regionais", valor: 95 },
  { rotulo: "Bebidas Artesanais", valor: 75 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    // Limpa o canvas antes de desenhar (útil se os valores mudarem)
    ctx.clearRect(0, 0, 380, 170);

    const maior = Math.max(...dados.map((d) => d.valor));
    ctx.font = "14px sans-serif";

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 200; // barra proporcional (até 200px)
      const y = 20 + i * 50; // cada barra 50px abaixo da anterior

      // 1. Escolhe a cor da barra (vinho/bordô do evento)
      ctx.fillStyle = "#7f1d1d";

      // 2. Desenha a barra começando em x = 135 (dando espaço para o rótulo)
      ctx.fillRect(135, y, largura, 28);

      // 3. Troca a cor para escuro e escreve o rótulo à esquerda (x = 10)
      ctx.fillStyle = "#111827";
      ctx.fillText(item.rotulo, 10, y + 19);

      // 4. Escreve o valor logo depois do fim da barra
      ctx.fillText(item.valor, 135 + largura + 8, y + 19);
    });
  }, []);

  return (
    <section className="px-4 py-16 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900">
        Vendas por Categoria
      </h2>
      <p className="mt-2 text-gray-600">
        Acompanhe o que o público mais pediu no festival
      </p>

      <div className="mt-6 flex justify-center">
        <canvas
          ref={canvasRef}
          width={380}
          height={170}
          role="img"
          aria-label="Gráfico de barras mostrando vendas por categoria: Pratos Típicos com 140, Doces Regionais com 95 e Bebidas Artesanais com 65."
          className="max-w-full border border-gray-200 rounded-lg bg-white shadow-sm"
        />
      </div>
    </section>
  );
}

export default Grafico;