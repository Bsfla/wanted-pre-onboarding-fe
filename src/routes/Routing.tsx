import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth";
import Todo from "../pages/Todo";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
};

export default Routing;
