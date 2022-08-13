import React from "react";
import styled from "styled-components";

interface Props {
  valid: boolean;
  isSignUp: boolean;
}

const Button = ({ valid, isSignUp }: Props) => {
  return (
    <>
      <StyledButton disabled={!valid} onClick={(e) => e.preventDefault()}>
        {isSignUp ? "로그인" : "회원가입"}
      </StyledButton>
    </>
  );
};

export default Button;

const StyledButton = styled.button`
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

  &:active {
    background-color: #212121;
  }
  &:disabled {
    background-color: #f5f5f5;
  }
`;
