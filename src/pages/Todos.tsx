import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTEPATH } from '../constants';
import axios from 'axios';
import * as S from './styles.Todo';
import { Layout, Input, Button, Todo } from '../components';

type TodoItemProps = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

function Todos() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState<TodoItemProps[]>([]);

  const getTodoList = () => {
    axios
      .get('https://pre-onboarding-selection-task.shop/todos', {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      })
      .then(res => setTodoList(res.data))
      .catch(err => alert(`${err}`));
  };

  const createTodoItem = (data: { todo: string }) => {
    axios
      .post('https://pre-onboarding-selection-task.shop/todos', data, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      })
      .then(res => setTodoList(prev => [...prev, res.data]))
      .catch(err => alert(`${err}`));
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: { todo: string } = {
      todo: inputValue,
    };
    createTodoItem(data);
    setInputValue('');
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (!localStorage.access_token) return navigate(ROUTEPATH.ROOT);
    getTodoList();
  }, [navigate]);

  return (
    <Layout>
      <S.TodoHeader>
        <S.Title>TODOS</S.Title>
        <form onSubmit={handleOnSubmit}>
          <Input
            inputType="todo"
            type="text"
            name="todo"
            onChange={handleOnChange}
            value={inputValue}
          />
          <Button buttonType="confirm" type="submit">
            추가
          </Button>
        </form>
      </S.TodoHeader>
      <S.ListContainer>
        {todoList.map((item, idx) => (
          <Todo key={item.id} todoItem={item} setTodoList={setTodoList} />
        ))}
      </S.ListContainer>
    </Layout>
  );
}

export default Todos;
