import { useState } from 'react'
import { useTodo } from '../contexts'

const PRIORITY_STYLES = {
  low: 'bg-sky-200 text-sky-900',
  medium: 'bg-amber-200 text-amber-900',
  high: 'bg-rose-200 text-rose-900',
}

const iconBtn =
  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-gray-50 text-sm hover:bg-gray-100 disabled:opacity-50'

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(todo.todo)
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  const save = () => {
    const trimmed = draft.trim()
    if (trimmed) updateTodo(todo.id, { todo: trimmed })
    else setDraft(todo.todo) // reject empty edits
    setIsEditing(false)
  }

  const cancel = () => {
    setDraft(todo.todo)
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') save()
    if (e.key === 'Escape') cancel()
  }

  return (
    <div
      className={`flex items-center gap-x-3 rounded-lg border border-black/10 px-3 py-1.5 text-black shadow-sm shadow-white/50 duration-300 ${
        todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        aria-label={`Mark "${todo.todo}" as ${todo.completed ? 'not done' : 'done'}`}
      />
      <input
        type="text"
        aria-label="Task text"
        className={`w-full rounded-lg border bg-transparent outline-none ${
          isEditing ? 'border-black/20 px-2' : 'border-transparent'
        } ${todo.completed ? 'line-through opacity-70' : ''}`}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={handleKeyDown}
        readOnly={!isEditing}
      />
      {todo.priority && (
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
            PRIORITY_STYLES[todo.priority]
          }`}
        >
          {todo.priority}
        </span>
      )}
      <button
        className={iconBtn}
        onClick={() => (isEditing ? save() : setIsEditing(true))}
        disabled={todo.completed}
        aria-label={isEditing ? 'Save task' : 'Edit task'}
      >
        {isEditing ? '💾' : '✏️'}
      </button>
      <button
        className={iconBtn}
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete task"
      >
        🗑️
      </button>
    </div>
  )
}

export default TodoItem
