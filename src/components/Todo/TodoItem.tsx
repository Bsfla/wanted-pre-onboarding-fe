import styled from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import TodoType from "../../types/todosType";
import React from "react";

interface Props {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  todo: TodoType;
  onDelete: (id: number) => void;
}

const TodoItem = ({ setIsEdit, todo, onDelete }: Props) => {
  return (
    <>
      {todo.isCompleted ? (
        <Completed>
          <MdDone />
        </Completed>
      ) : (
        <UnCompleted>
          <FaTimes />
        </UnCompleted>
      )}
      <Text>{todo.todo}</Text>
      <Edit onClick={() => setIsEdit(true)}>
        <BsPencilFill />
      </Edit>
      <Remove onClick={() => onDelete(todo.id)}>
        <MdDelete />
      </Remove>
    </>
  );
};

export default TodoItem;

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

const Completed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #38d9a9;
  font-size: 24px;
  margin-right: 20px;
`;

const UnCompleted = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff6b6b;
  font-size: 24px;
  margin-right: 20px;
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
`;
