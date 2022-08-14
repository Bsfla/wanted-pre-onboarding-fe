import React from "react";
import styled from "styled-components";

interface Props {
  valid: boolean;
  isSignUp: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ valid, isSignUp, onClick }: Props) => {
  return (
    <>
      <StyledButton disabled={!valid} onClick={(e) => onClick(e)}>
        {isSignUp ? "회원가입" : "로그인"}
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
