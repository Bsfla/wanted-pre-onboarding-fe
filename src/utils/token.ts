export const setToken = (token: string) => {
  if (typeof window !== "undefined")
    return window.localStorage.setItem("access_token", token);
  return undefined;
};

export const getToken = () => {
  if (typeof window !== "undefined")
    return window.localStorage.getItem("access_token");
  return undefined;
};
