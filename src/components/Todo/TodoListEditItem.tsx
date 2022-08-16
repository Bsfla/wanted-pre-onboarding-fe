import { useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { MdDone } from "react-icons/md";
import TodoType from "../../types/todosType";
import { stringify } from "querystring";

interface Props {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  todo: TodoType;
  onEdit: (body: { todo: string; isCompleted: boolean; id: number }) => void;
}

const TodoListEditItem = ({ setIsEdit, todo, onEdit }: Props) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.isCompleted);
  const [value, setValue] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <>
      <CheckCircle
        isCompleted={isCompleted}
        onClick={() => setIsCompleted(!isCompleted)}
      >
        {isCompleted && <MdDone />}
      </CheckCircle>
      <Text value={value} ref={inputRef} onChange={(e) => onChange(e)}></Text>
      <EditButton
        onClick={() => {
          onEdit({ todo: value, isCompleted, id: todo.id });
          setIsEdit(false);
        }}
      >
        완료
      </EditButton>
      <CancelButton onClick={() => setIsEdit(false)}>취소</CancelButton>
    </>
  );
};

export default TodoListEditItem;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckCircle = styled.div<{ isCompleted: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.isCompleted &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.input`
  flex: 1;
  font-size: 21px;
  color: #495057;
  border: none;
  outline: none;
  border-bottom: 1px solid #ced4da;
  padding-bottom: 6px;
`;

const CancelButton = styled.button`
  width: 40px;
  padding: 3px;
  color: white;
  font-weight: bold;
  background-color: #ff6b6b;
  cursor: pointer;
  border: none;
  border-radius: 10px;
`;

const EditButton = styled.button`
  width: 40px;
  padding: 3px;
  color: white;
  font-weight: bold;
  background-color: #38d9a9;
  border: none;
  border-radius: 10px;
  margin-left: 13px;
  margin-right: 13px;
  cursor: pointer;
`;
