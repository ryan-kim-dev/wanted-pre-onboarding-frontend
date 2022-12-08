import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTEPATH } from '../constants';
import * as S from './styles.Todo';
import { Layout, Input, Button, Todo } from '../components';
import { getTodos, createTodo } from '../apis';

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

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: { todo: string } = {
      todo: inputValue,
    };
    createTodo(data)
      .then(res => setTodoList(prev => [...prev, res.data]))
      .catch(err => alert(`${err}`));
    setInputValue('');
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (!localStorage.access_token) return navigate(ROUTEPATH.ROOT);
    getTodos()
      .then(res => setTodoList(res.data))
      .catch(err => alert(`${err}`));
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
