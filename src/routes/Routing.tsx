import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
    </Routes>
  );
};

export default Routing;
