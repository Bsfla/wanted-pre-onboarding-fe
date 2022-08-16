import { authAxios } from ".";

export const createTodo = async (body: { todo: string }) => {
  return await authAxios.post("/todos", body);
};

export const getTodo = async () => {
  return await authAxios.get("/todos");
};

export const updateTodo = async (body: {
  todo: string;
  isCompleted: boolean;
  id: number;
}) => {
  const { todo, isCompleted, id } = body;
  return await authAxios.put(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodo = async (id: number) => {
  return await authAxios.delete(`/todos/${id}`);
};
