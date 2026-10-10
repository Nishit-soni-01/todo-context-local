# Todo Manager

A clean, accessible task manager built with **React 18**, **Context API**, and **Tailwind CSS**. Tasks persist in the browser, so nothing is lost on refresh.


<img width="1071" height="687" alt="image" src="https://github.com/user-attachments/assets/52a6cd07-e9ec-4506-b4ad-d414ded64465" />

<img width="972" height="652" alt="image" src="https://github.com/user-attachments/assets/de9189bf-971c-47f0-b3fe-f556b8b1ff81" />
<img width="880" height="507" alt="image" src="https://github.com/user-attachments/assets/edb99098-f9ad-4933-bc93-0843df039f1a" />
<img width="920" height="477" alt="image" src="https://github.com/user-attachments/assets/574f818f-2e3c-402f-9258-4de20f97b081" />



## Features

- Add, edit, complete, and delete tasks
- Priority levels (low, medium, high) with colour-coded badges
- Filter by All, Active, or Completed, with live counts
- "Clear completed" in one click
- Automatic persistence with `localStorage`
- Keyboard friendly: Enter to save an edit, Esc to cancel
- Accessible: labelled controls, screen-reader support, visible focus
- Responsive layout

## Tech stack

| Area | Choice |
| --- | --- |
| UI | React 18 + Vite |
| State | Context API + hooks |
| Styling | Tailwind CSS |
| Persistence | Custom `useLocalStorage` hook |

## Project structure

```
src/
├── components/
│   ├── TodoForm.jsx      # add a task with a priority
│   ├── TodoItem.jsx      # single task: toggle, edit, delete
│   ├── TodoFilters.jsx   # filter tabs and clear completed
│   └── index.js
├── contexts/
│   ├── TodoContext.js    # context, provider, useTodo hook
│   └── index.js
├── hooks/
│   └── useLocalStorage.js
├── App.jsx               # state, actions, layout
├── main.jsx
└── index.css
```

## Getting started

```bash
git clone https:(https://github.com/Nishit-soni-01/todo-context-local.git)
cd todo-app
npm install
npm run dev
```

Build for production with `npm run build`.

## What I learned

- Sharing state across components with Context instead of prop drilling
- Writing a reusable custom hook that handles storage errors safely
- Immutable state updates and deriving data with `useMemo`
- Building accessible forms and controls

## Roadmap

- [ ] Due dates and sorting
- [ ] Drag-and-drop reordering
- [ ] Dark / light theme toggle
- [ ] Unit tests with Vitest and React Testing Library

## License

MIT
