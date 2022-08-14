import { customAxios } from ".";
import { FormType } from "../types/formType";

export const signIn = async (body: FormType) => {
  return await customAxios.post("/auth/signin", body);
};

export const signUp = async (body: FormType) => {
  return await customAxios.post("/auth/signup", body);
};
