import React, { useState, useCallback } from "react";
import AuthForm from "../components/Auth/AuthForm";
import useForm from "../hooks/useForm";
import { signIn, signUp } from "../apis/auth";
import { setToken } from "../utils/token";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const formState = useForm();

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
              window.location.reload();
            }
          })
          .catch((err) => alert(err.response.data.message));
    },
    [formState, isSignUp]
  );

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
