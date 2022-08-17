import React, { useState } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import { theme } from "../../styles/theme";

interface Props {
  onCreate: (body: { todo: string }) => void;
}

function TodoCreate({ onCreate }: Props) {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={(e) => e.preventDefault()}>
          <Input
            value={value}
            onChange={(e) => onChange(e)}
            placeholder="할 일을 입력 후, 버튼을 누르세요"
          />
        </InsertForm>
      </InsertFormPositioner>
      <CircleButton
        onClick={() => {
          onCreate({ todo: value });
        }}
      >
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);

const CircleButton = styled.button`
  background-color: ${theme.colors.gray};
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: ${theme.colors.white};
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #a4a4a4;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
