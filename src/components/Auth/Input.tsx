import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ title, type, name, placeholder, value, onChange }: Props) => {
  return (
    <InputContainer>
      <span>{title}</span>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        name={name}
        value={value}
      />
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
