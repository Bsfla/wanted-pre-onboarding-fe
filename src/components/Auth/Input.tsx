import React from "react";
import styled from "styled-components";
import useForm from "../../hooks/useForm";

interface Props {
  title: string;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ title, type, name, onChange }: Props) => {
  return (
    <InputContainer>
      <span>{title}</span>
      <input type={type} onChange={(e) => onChange(e)} name={name} />
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
