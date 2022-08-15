import { authAxios } from ".";

export const createTodo = async (body: { todo: string }) => {
  return await authAxios.post("/todos", body);
};

export const getTodo = async () => {
  return await authAxios.get("/todos");
};
