import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "../pages/Auth";
import Todo from "../pages/Todo";
import { getToken } from "../utils/token";

const Routing = () => {
  const token = getToken();

  console.log(token);
  return (
    <Routes>
      <Route
        path="/"
        element={token ? <Navigate replace to="/todo" /> : <Auth />}
      />
      <Route
        path="/todo"
        element={token ? <Todo /> : <Navigate replace to="/" />}
      />
    </Routes>
  );
};

export default Routing;
