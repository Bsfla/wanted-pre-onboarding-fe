import React, { useState } from "react";
import AuthForm from "../components/Auth/AuthForm";
import useForm from "../hooks/useForm";
import { signIn, signUp } from "../apis/auth";
import { setToken } from "../utils/token";
import { Navigate, useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const formState = useForm();
  const navigate = useNavigate();

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (isSignUp) {
      signUp(formState.form)
        .then((res) => {
          if (res.status === 201) {
            setIsSignUp(false);
            formState.setForm({
              ...formState.form,
              email: "",
              password: "",
            });
          }
        })
        .catch((err) => alert(err.response.data.message));
    } else
      signIn(formState.form)
        .then((res) => {
          if (res.status === 200) {
            setToken(res.data.access_token);
            navigate("/todo");
          }
        })
        .catch((err) => alert(err.response.data.message));
  };

  return (
    <AuthForm
      formState={formState}
      isSignUp={isSignUp}
      setIsSignUp={setIsSignUp}
      onClick={onClick}
    />
  );
};

export default Auth;
