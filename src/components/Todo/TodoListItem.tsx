import React, { useState } from "react";
import styled from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";
import Item from "./Item";
import TodoListEditItem from "./TodoListEditItem";
import TodoType from "../../types/todosType";

interface Props {
  todo: TodoType;
  onEdit: (body: { todo: string; isCompleted: boolean; id: number }) => void;
  onDelete: (id: number) => void;
}

const TodoListItem = ({ todo, onEdit, onDelete }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <TodoItemBlock>
      {isEdit ? (
        <TodoListEditItem setIsEdit={setIsEdit} todo={todo} onEdit={onEdit} />
      ) : (
        <Item setIsEdit={setIsEdit} todo={todo} onDelete={onDelete} />
      )}
    </TodoItemBlock>
  );
};

export default TodoListItem;

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
