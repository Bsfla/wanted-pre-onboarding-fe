import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import Input from "./Input";
import Button from "./Button";
import { FormType } from "../../types/formType";

interface Props {
  formState: {
    form: FormType;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    valid: boolean;
    setForm: React.Dispatch<React.SetStateAction<FormType>>;
  };

  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  isSignUp: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const AuthForm = ({ formState, isSignUp, setIsSignUp, onClick }: Props) => {
  return (
    <Wrapper>
      <Title>
        <h3>{isSignUp ? "Register" : "Login"}</h3>
      </Title>
      <Form>
        <Input
          type="text"
          name="email"
          onChange={formState.onChange}
          placeholder="이메일 입력"
          value={formState.form.email}
        />
        <Input
          type="password"
          name="password"
          onChange={formState.onChange}
          placeholder="비밀번호 입력"
          value={formState.form.password}
        />
        <Button valid={formState.valid} isSignUp={isSignUp} onClick={onClick} />
        <p
          onClick={() => {
            setIsSignUp(!isSignUp);
            formState.setForm({
              ...formState.form,
              email: "",
              password: "",
            });
          }}
        >
          {isSignUp ? "로그인" : "회원가입"}
        </p>
      </Form>
    </Wrapper>
  );
};

export default AuthForm;

const Wrapper = styled.div`
  width: 26em;
  height: 22em;
`;
const Title = styled.div`
  background-color: ${theme.colors.gray};
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  border-radius: 5px 5px 0px 0px;

  h3 {
    color: ${theme.colors.white};
  }
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 0px 0px 5px 5px;

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin-top: 10px;
  }

  p {
    text-decoration: underline;
    margin-top: 10px;
    cursor: pointer;
  }
`;
