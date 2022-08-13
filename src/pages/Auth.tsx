import React, { useState } from "react";
import AuthForm from "../components/Auth/AuthForm";
import { FormType } from "../types/formType";

const Auth = () => {
  const [form, setForm] = useState<FormType>({
    email: "",
    password: "",
  });
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return <AuthForm />;
};

export default Auth;
