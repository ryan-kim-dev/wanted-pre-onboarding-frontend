import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { updateTodo, deleteTodo } from '../../apis';
import { Button, Input } from '../index';
import * as S from './styles';
import { BiEdit, BiTrash } from 'react-icons/bi';

type TodoItemProps = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

interface IITodo {
  todoItem: TodoItemProps;
  setTodoList: React.Dispatch<React.SetStateAction<TodoItemProps[]>>;
}

function Todo({ todoItem, setTodoList }: IITodo) {
  const [isEdit, setIsEdit] = useState(false);
  const [todoInfo, setTodoInfo] = useState({
    todo: todoItem.todo,
    isCompleted: todoItem.isCompleted,
  });

  const todoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInfo(prev => ({ ...prev, todo: e.target.value }));
  };

  const handleOnChangeChecked =
    (id: number, data: { todo: string; isCompleted: boolean }) => () => {
      const newData = { todo: data.todo, isCompleted: !todoInfo.isCompleted };
      updateTodo(id, newData).then((res: AxiosResponse) => {
        setTodoList(res.data);
        setTodoInfo(newData);
      });
    };

  const handleUpdateBtnClick =
    (id: number, data: { todo: string; isCompleted: boolean }) => () => {
      updateTodo(id, data).then((res: AxiosResponse) => {
        setTodoList(res.data);
        setIsEdit(false);
      });
    };

  const handleDeleteBtnClick = (id: number) => () => {
    deleteTodo(id).then((res: AxiosResponse) => setTodoList(res.data));
  };

  return (
    <S.TodoItemLayout>
      <Input
        inputType="checkbox"
        type="checkbox"
        checked={todoInfo.isCompleted}
        onChange={handleOnChangeChecked(todoItem.id, todoInfo)}
      />
      {isEdit ? (
        <S.OnEditWrapper>
          <Input
            inputType="todo"
            type="text"
            value={todoInfo.todo}
            onChange={todoInputChange}
          />
          <Button
            buttonType="confirm"
            type="button"
            onClick={handleUpdateBtnClick(todoItem.id, todoInfo)}
          >
            수정하기
          </Button>
          <Button
            buttonType="cancel"
            type="button"
            onClick={() => setIsEdit(false)}
          >
            X
          </Button>
        </S.OnEditWrapper>
      ) : (
        <S.TaskInfoWrapper>
          <S.TaskInfoText>{todoItem.todo}</S.TaskInfoText>
          <S.FunctionBtnDiv onClick={() => setIsEdit(true)}>
            <BiEdit />
            <span>수정</span>
          </S.FunctionBtnDiv>
          <S.FunctionBtnDiv onClick={handleDeleteBtnClick(todoItem.id)}>
            <BiTrash />
            <span>삭제</span>
          </S.FunctionBtnDiv>
        </S.TaskInfoWrapper>
      )}
    </S.TodoItemLayout>
  );
}

export default Todo;
