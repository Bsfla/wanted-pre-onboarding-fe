import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <>
      <StyledButton>로그인</StyledButton>
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
`;
