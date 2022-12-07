import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTEPATH } from '../constants';
import axios from 'axios';
import Todo from '../components/Todo';

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
    <div>
      <div>
        <span>할 일 추가하기</span>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="todo"
            onChange={handleOnChange}
            value={inputValue}
          />
          <button type="submit">추가</button>
        </form>
        {todoList.map((item, idx) => (
          <Todo key={item.id} todoItem={item} setTodoList={setTodoList} />
        ))}
      </div>
    </div>
  );
}

export default Todos;
