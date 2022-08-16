import React from "react";
import TodoList from "../components/Todo/TodoList";
import { useEffect, useState } from "react";
import { createTodo, getTodo, updateTodo, deleteTodo } from "../apis/todo";
import TodoType from "../types/todosType";

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const onCreate = (body: { todo: string }) => {
    createTodo(body).then((res) => {
      if (res.status === 201) setTodos([...todos, res.data]);
    });
  };

  const onEdit = (body: { todo: string; isCompleted: boolean; id: number }) => {
    updateTodo(body).then((res) => {
      if (res.status === 200) {
        const { id } = body;
        setTodos(todos.map((todo) => (todo.id === id ? res.data : todo)));
      }
    });
  };

  const onDelete = (id: number) => {
    deleteTodo(id).then((res) => {
      if (res.status === 204) {
        setTodos(todos.filter((todo) => todo.id !== id));
      }
    });
  };

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
