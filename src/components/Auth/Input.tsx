import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  type: string;
}

const Input = ({ title, type }: Props) => {
  return (
    <InputContainer>
      <span>{title}</span>
      <input type={type} />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-top: 10px;

  input {
    width: 26em;
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    border: solid #c7c7c7;
  }
`;
