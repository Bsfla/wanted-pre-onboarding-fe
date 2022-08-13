import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthForm from "../components/Auth/AuthForm";
import Auth from "../pages/Auth";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
    </Routes>
  );
};

export default Routing;
