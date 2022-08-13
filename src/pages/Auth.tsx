import React, { useState } from "react";
import AuthForm from "../components/Auth/AuthForm";
import useForm from "../hooks/useForm";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const formState = useForm();

  return (
    <AuthForm
      formState={formState}
      isSignUp={isSignUp}
      setIsSignUp={setIsSignUp}
    />
  );
};

export default Auth;
