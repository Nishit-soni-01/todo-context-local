import { createContext, useContext } from 'react'

export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
  clearCompleted: () => {},
})

export const useTodo = () => useContext(TodoContext)

export const TodoProvider = TodoContext.Provider
