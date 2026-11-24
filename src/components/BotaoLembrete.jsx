import { useState } from "react";

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");

  async function ativarLembrete() {
    // 1. Verifica se o navegador suporta notificações
    if (!("Notification" in window)) {
      setMensagem("Este navegador não aceita notificações.");
      return;
    }

    // 2. Pede permissão ao usuário
    const permissao = await Notification.requestPermission();

    // 3. Verifica se a permissão foi negada ou fechada
    if (permissao !== "granted") {
      setMensagem("Você não permitiu as notificações.");
      return;
    }

    // 4. Espera o Service Worker ficar pronto
    const registro = await navigator.serviceWorker.ready;

    // 5. Mostra a notificação pelo Service Worker
    registro.showNotification("Festival Sabores da Alta Paulista", {
      body: "Não se esqueça! De 22 a 24 de novembro na Praça Central de Osvaldo Cruz.",
      icon: "/icone-192.png",
    });

    // 6. Atualiza a mensagem na tela
    setMensagem("Lembrete ativado!");
  }

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={ativarLembrete}
        className="rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white shadow hover:bg-amber-700 transition"
      >
        Me lembre do evento 🔔
      </button>

      {mensagem && (
        <p role="status" className="mt-2 text-sm font-medium">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;