import React from "react";
import styled from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";
import TodoType from "../../types/todosType";

interface Props {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  todo: TodoType;
}

const Item = ({ setIsEdit, todo }: Props) => {
  return (
    <>
      <CheckCircle></CheckCircle>
      <Text>{todo.todo}</Text>
      <Edit onClick={() => setIsEdit(true)}>
        <BsPencilFill />
      </Edit>
      <Remove>
        <MdDelete />
      </Remove>
    </>
  );
};

export default Item;

const Edit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #38d9a9;
  font-size: 18px;
  cursor: pointer;
  margin-right: 15px;
`;
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff6b6b;
  font-size: 24px;
  cursor: pointer;
`;

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

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
`;
