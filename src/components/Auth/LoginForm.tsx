import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const LoginForm = () => {
  return (
    <Wrapper>
      <Title>
        <h3>Login</h3>
      </Title>
      <Form>
        <label>
          <span>Email</span>
          <Input />
        </label>
        <label>
          <span>Password</span>
          <Input type="password" />
        </label>
        <Button>로그인</Button>
      </Form>
    </Wrapper>
  );
};

export default LoginForm;

const Wrapper = styled.div`
  width: 26em;
  height: 19em;
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
`;

const Input = styled.input`
  width: 26em;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: solid #c7c7c7;
`;

const Button = styled.button`
  width: 15em;
  padding: 13px;
  margin-top: 30px;
  border-radius: 10px;
  border: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  background-color: #6d6d6d;
  cursor: pointer;
`;
