import { useMemo, useState } from 'react'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem, TodoFilters } from './components'
import { useLocalStorage } from './hooks/useLocalStorage'

const FILTERS = {
  all: () => true,
  active: (t) => !t.completed,
  completed: (t) => t.completed,
}

function App() {
  const [todos, setTodos] = useLocalStorage('todos', [])
  const [filter, setFilter] = useState('all')

  const addTodo = (todo) =>
    setTodos((prev) => [{ id: Date.now(), completed: false, ...todo }, ...prev])

  // Merge changes so callers only pass the fields they want to update
  const updateTodo = (id, changes) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, ...changes } : t)))

  const deleteTodo = (id) => setTodos((prev) => prev.filter((t) => t.id !== id))

  const toggleComplete = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )

  const clearCompleted = () => setTodos((prev) => prev.filter((t) => !t.completed))

  const visibleTodos = useMemo(() => todos.filter(FILTERS[filter]), [todos, filter])
  const counts = useMemo(
    () => ({
      all: todos.length,
      active: todos.filter(FILTERS.active).length,
      completed: todos.filter(FILTERS.completed).length,
    }),
    [todos]
  )

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete, clearCompleted }}
    >
      <div className="min-h-screen bg-[#172842] px-4 py-10 text-white">
        <main className="mx-auto w-full max-w-2xl">
          <header className="mb-6 text-center">
            <h1 className="text-3xl font-bold">Todo Manager</h1>
            <p className="mt-1 text-sm text-white/60">
              {counts.active} {counts.active === 1 ? 'task' : 'tasks'} left to do
            </p>
          </header>

          <TodoForm />
          <TodoFilters filter={filter} onChange={setFilter} counts={counts} />

          <ul className="mt-4 flex flex-col gap-y-3" aria-live="polite">
            {visibleTodos.map((todo) => (
              <li key={todo.id}>
                <TodoItem todo={todo} />
              </li>
            ))}
          </ul>

          {visibleTodos.length === 0 && (
            <p className="mt-10 text-center text-white/50">
              {filter === 'all'
                ? 'No tasks yet. Add your first one above.'
                : `No ${filter} tasks.`}
            </p>
          )}
        </main>
      </div>
    </TodoProvider>
  )
}

export default App
