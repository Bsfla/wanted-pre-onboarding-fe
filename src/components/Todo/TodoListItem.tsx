import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
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
        <TodoItem setIsEdit={setIsEdit} todo={todo} onDelete={onDelete} />
      )}
    </TodoItemBlock>
  );
};

export default React.memo(TodoListItem);

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  overflow-y: auto;
`;
