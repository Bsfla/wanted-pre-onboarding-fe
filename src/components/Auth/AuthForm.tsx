import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";

const AuthForm = () => {
  return (
    <Wrapper>
      <Title>
        <h3>Login</h3>
      </Title>
      <Form>
        <Input type="text" title="Email" />
        <Input type="password" title="Password" />
        <Button />
        <p>회원가입</p>
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
  background-color: #484848;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  border-radius: 5px 5px 0px 0px;

  h3 {
    color: #ffffff;
  }
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
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
