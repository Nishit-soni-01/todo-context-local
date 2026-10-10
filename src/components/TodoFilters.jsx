import { useTodo } from '../contexts'

const TABS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
]

function TodoFilters({ filter, onChange, counts }) {
  const { clearCompleted } = useTodo()

  return (
    <div className="mt-4 flex items-center justify-between gap-2">
      <div role="group" aria-label="Filter tasks" className="flex gap-1">
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            aria-pressed={filter === key}
            className={`rounded-md px-3 py-1 text-sm duration-150 ${
              filter === key ? 'bg-white text-[#172842]' : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            {label} ({counts[key]})
          </button>
        ))}
      </div>
      <button
        onClick={clearCompleted}
        disabled={counts.completed === 0}
        className="text-sm text-white/70 underline-offset-2 hover:underline disabled:cursor-not-allowed disabled:opacity-40 disabled:no-underline"
      >
        Clear completed
      </button>
    </div>
  )
}

export default TodoFilters
