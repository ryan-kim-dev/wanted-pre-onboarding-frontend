import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop',
  headers: {
    Authorization: `Bearer ${localStorage.access_token}`,
  },
});

const getTodos = async () => {
  try {
    const response = await axiosInstance.get('/todos');
    return response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response?.data;
    }
  }
};

const createTodo = async (id: number) => {
  try {
    const response = await axiosInstance.post(`/todos/${id}`);
    return response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response?.data;
    }
  }
};

const updateTodo = async (
  id: number,
  data: { todo: string; isCompleted: boolean }
) => {
  try {
    await axiosInstance.put(`todos/${id}`, data);
    const response = getTodos();
    return response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response?.data;
    }
  }
};

const deleteTodo = async (id: number) => {
  try {
    await axiosInstance.delete(`todos/${id}`);
    const response = getTodos();
    return response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response?.data;
    }
  }
};

export { getTodos, createTodo, updateTodo, deleteTodo };