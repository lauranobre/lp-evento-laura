# Relatório de Acessibilidade

## Antes
- **Nota do Lighthouse (mobile):** 93
- **Problemas apontados pelo Lighthouse:** Falhas de contraste (`Background and foreground colors do not have a sufficient contrast ratio.`) identificadas nos números em destaque da seção Sobre e no texto secundário do Rodapé.
- **Problemas apontados pelo axe:** Falta de suporte a preferências do sistema para redução de movimento e falta de marcos de formulário explícitos.
- **Problemas encontrados no teste do teclado:** Dificuldade em identificar o foco em botões secundários e campos de entrada de dados de maneira nítida.

## Depois
- **Nota do Lighthouse (mobile):** 100
- **O que foi corrigido:**
  - Substituição da cor laranja (`text-destaque`) por vermelho escuro (`text-primaria`) nos cards de destaque da seção Sobre para garantir a legibilidade.
  - Remoção de opacidade excessiva (`opacity-70`) no Rodapé e definição da classe `text-gray-300` para contraste completo contra o fundo escuro.
  - Inclusão do link de acessibilidade oculto "Pular para o conteúdo principal" no topo da página.
  - Implementação de regras de foco altamente visíveis (`:focus-visible`) e suporte a `prefers-reduced-motion` no CSS global.
  - Adicionados atributos `autoComplete` apropriados no formulário de inscrição.
  - Criação da seção de Perguntas Frequentes (FAQ) utilizando os atributos semânticos estruturais corretos (`aria-expanded` e `aria-controls`) conectados via estados do React.
- **O que ainda não está bom (e por quê):** Todos os critérios de validação automática e testes manuais de teclado foram atendidos integralmente.

## Um problema que a ferramenta NÃO apontou e eu encontrei
As ferramentas automatizadas validaram o contraste original do texto do slogan e da data no gradiente da seção Hero, mas, durante a revisão manual e em condições reais, percebi que o contraste ainda gerava certo cansaço visual. O código foi ajustado para intensificar as cores escuras em sobreposição aos planos de fundo mais claros, melhorando a experiência de uso para além das métricas rígidas do robô.
