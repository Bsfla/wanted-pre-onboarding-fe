import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import TodoCreate from "./TodoCreate";
import TodoType from "../../types/todosType";
import { removeToken } from "../../utils/token";

interface Props {
  todos: TodoType[];
  onCreate: (body: { todo: string }) => void;
  onEdit: (body: { todo: string; isCompleted: boolean; id: number }) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ todos, onCreate, onEdit, onDelete }: Props) => {
  return (
    <Wrapper>
      <TodoHeader>
        <h3>ToDoList</h3>
      </TodoHeader>
      <TitleBlock>
        <LogOutButton
          onClick={() => {
            removeToken();
            window.location.reload();
          }}
        >
          로그아웃
        </LogOutButton>
      </TitleBlock>
      <TodoListBlock>
        {todos.map((todo: TodoType, index: number) => (
          <TodoListItem
            todo={todo}
            key={todo.id}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </TodoListBlock>
      <TodoCreate onCreate={onCreate} />
    </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.div`
  width: 512px;
  height: 600px;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const TodoHeader = styled.div`
  background-color: #484848;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  border-radius: 5px 5px 0px 0px;

  h3 {
    color: #ffffff;
  }
`;

const TitleBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  span {
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const LogOutButton = styled.button`
  width: 5em;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: #484848;
  margin-left: 10px;
  font-weight: bold;
  cursor: pointer;
`;

const TodoListBlock = styled.div`
  height: 20em;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
