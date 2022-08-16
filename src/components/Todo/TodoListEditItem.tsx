import { useRef, useEffect } from "react";
import styled from "styled-components";
import { MdDone } from "react-icons/md";
import TodoType from "../../types/todosType";

interface Props {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  todo: TodoType;
}

const TodoListEditItem = ({ setIsEdit, todo }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <>
      <CheckCircle></CheckCircle>
      <Text value={todo.todo} ref={inputRef}></Text>
      <EditButton>완료</EditButton>
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

const CheckCircle = styled.div`
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
