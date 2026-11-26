import { useState } from 'react'

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState('')

  async function ativarLembrete() {
    if (!('Notification' in window)) {
      setMensagem('Este navegador não aceita notificações.')
      return
    }

    const permissao = await Notification.requestPermission()

    if (permissao !== 'granted') {
      setMensagem('Você não permitiu as notificações.')
      return
    }

    const registro = await navigator.serviceWorker.ready

    registro.showNotification('Festival Sabores da Alta Paulista', {
      body: 'Não se esqueça! De 22 a 24 de novembro na Praça Central de Osvaldo Cruz.',
      icon: '/icone-192.png',
    })

    setMensagem('Lembrete ativado!')
  }

  return (
    <div className="w-full sm:w-auto">
      <button
        type="button"
        onClick={ativarLembrete}
        className="w-full sm:w-auto rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 px-6 py-3.5 font-semibold text-white transition min-h-[48px] cursor-pointer"
      >
        Me lembre do evento 🔔
      </button>

      {mensagem && (
        <p role="status" className="mt-2 text-sm font-medium text-destaque">
          {mensagem}
        </p>
      )}
    </div>
  )
}

export default BotaoLembrete