import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { updateTodo, deleteTodo } from '../apis';

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
    <div>
      <div>
        <input
          type="checkbox"
          checked={todoInfo.isCompleted}
          onChange={handleOnChangeChecked(todoItem.id, todoInfo)}
        />
        <>
          {isEdit ? (
            <>
              <input
                type="text"
                value={todoInfo.todo}
                onChange={todoInputChange}
              />
              <button
                type="button"
                onClick={handleUpdateBtnClick(todoItem.id, todoInfo)}
              >
                수정하기
              </button>
              <button type="button" onClick={() => setIsEdit(false)}>
                X
              </button>
            </>
          ) : (
            <div>
              <span>{todoItem.todo}</span>
              <button onClick={() => setIsEdit(true)}>수정</button>
              <button onClick={handleDeleteBtnClick(todoItem.id)}>삭제</button>
            </div>
          )}
        </>
      </div>
    </div>
  );
}

export default Todo;
