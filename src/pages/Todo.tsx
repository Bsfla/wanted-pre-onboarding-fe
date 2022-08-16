import TodoList from "../components/Todo/TodoList";
import { useEffect, useState, useCallback } from "react";
import { createTodo, getTodo, updateTodo, deleteTodo } from "../apis/todo";
import TodoType from "../types/todosType";

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const onCreate = useCallback((body: { todo: string }) => {
    createTodo(body)
      .then((res) => {
        if (res.status === 201) setTodos((todos) => [...todos, res.data]);
      })
      .catch((err) => alert(err));
  }, []);

  const onEdit = useCallback(
    (body: { todo: string; isCompleted: boolean; id: number }) => {
      updateTodo(body)
        .then((res) => {
          if (res.status === 200) {
            const { id } = body;
            setTodos((todos) =>
              todos.map((todo) => (todo.id === id ? res.data : todo))
            );
          }
        })
        .catch((err) => alert(err));
    },
    []
  );

  const onDelete = useCallback((id: number) => {
    deleteTodo(id)
      .then((res) => {
        if (res.status === 204) {
          setTodos((todos) => todos.filter((todo) => todo.id !== id));
        }
      })
      .catch((err) => alert(err));
  }, []);

  useEffect(() => {
    getTodo().then((res) => {
      if (res.status === 200) {
        setTodos(res.data);
      }
    });
  }, []);

  return (
    <TodoList
      todos={todos}
      onCreate={onCreate}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export default Todo;
