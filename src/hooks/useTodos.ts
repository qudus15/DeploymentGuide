import { useEffect, useState } from "react";
import { Todo } from "../types/todo";

export default function useTodos(initialTodos?: Todo[]) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
    // Use savedTodos if any, else use initialTodos if provided, else fallback to empty array
    return savedTodos.length > 0 ? savedTodos : initialTodos ?? [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos(prevTodos =>
      prevTodos.map(todo => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function addTodo(title: string) {
    setTodos(prevTodos => [
      { id: Date.now(), title, completed: false },
      ...prevTodos,
    ]);
  }

  function deleteTodo(id: number) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  function deleteAllCompletedTodos() {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
  }

  return {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos,
  };
}
