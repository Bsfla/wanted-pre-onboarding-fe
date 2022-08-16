import React from "react";
import TodoList from "../components/Todo/TodoList";
import { useEffect, useState } from "react";
import { createTodo, getTodo } from "../apis/todo";
import TodoType from "../types/todosType";

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const onCreate = (body: { todo: string }) => {
    createTodo(body).then((res) => console.log(res));
  };

  useEffect(() => {
    getTodo().then((res) => {
      if (res.status === 200) {
        setTodos(res.data);
      }
    });
  }, []);

  return <TodoList todos={todos} onCreate={onCreate} />;
};

export default Todo;
