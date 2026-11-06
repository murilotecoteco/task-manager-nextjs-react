# Task Manager

Aplicação web de gerenciamento de tarefas construída com Next.js, React e TypeScript. Projeto prático para estudar organização de estado, experiência de uso e persistência no navegador.

[![Status](https://img.shields.io/badge/status-completed-success)](https://github.com/murilotecoteco/task-manager-nextjs-react)

[Demo](https://gerenciador-de-tarefas-one-pearl.vercel.app/) · [Código-fonte](https://github.com/murilotecoteco/task-manager-nextjs-react)

## Resultado

- Criação, edição, exclusão e conclusão de tarefas.
- Filtros por status e dashboard de estatísticas.
- Tema claro/escuro e notificações toast.
- Persistência local com `LocalStorage`.
- Layout responsivo para desktop e mobile.
- Deploy público na Vercel.

## Aprendizados

- Estruturar componentes com Next.js e React.
- Usar TypeScript para modelar tarefas e estados.
- Trabalhar com persistência client-side sem banco externo.
- Refinar fluxos de interface e feedback visual.

## Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | Next.js 16 |
| UI | React 19 |
| Linguagem | TypeScript |
| Estilos | Tailwind CSS 4 |
| Animações | Framer Motion |
| Ícones | Lucide React |
| Persistência | Browser LocalStorage |
| Deploy | Vercel |

## Como executar

Pré-requisitos: Node.js 20.9+ e npm.

```bash
git clone https://github.com/murilotecoteco/task-manager-nextjs-react.git
cd task-manager-nextjs-react
npm install
npm run dev
```

Para validar a build de produção:

```bash
npm run build
npm start
```

## Limitações e próximos passos

Os dados ficam apenas no navegador atual. Ainda não há autenticação, banco em nuvem, contas de usuário ou compartilhamento de tarefas.

## Licença

Projeto educacional e de portfólio. Nenhuma licença foi aplicada.
