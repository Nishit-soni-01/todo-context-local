import { useState } from 'react'
import { useTodo } from '../contexts'

const PRIORITIES = ['low', 'medium', 'high']

function TodoForm() {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState('medium')
  const { addTodo } = useTodo()

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return

    addTodo({ todo: trimmed, priority })
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <label htmlFor="new-todo" className="sr-only">
        New task
      </label>
      <input
        id="new-todo"
        type="text"
        placeholder="What needs doing?"
        className="w-full rounded-l-lg border border-black/10 bg-white/20 px-3 py-1.5 outline-none duration-150 focus:bg-white/30"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label htmlFor="new-priority" className="sr-only">
        Priority
      </label>
      <select
        id="new-priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border-y border-black/10 bg-white/20 px-2 text-sm outline-none"
      >
        {PRIORITIES.map((p) => (
          <option key={p} value={p} className="text-black">
            {p}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="shrink-0 rounded-r-lg bg-green-600 px-4 py-1 font-medium hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        Add task
      </button>
    </form>
  )
}

export default TodoForm
