import React from "react";
import TodoList from "../components/Todo/TodoList";
import { useEffect } from "react";
import { getTodo } from "../apis/todo";

const Todo = () => {
  useEffect(() => {
    getTodo().then((res) => console.log(res));
  }, []);
  return <TodoList />;
};

export default Todo;
