import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop',
});

export const getTodos = async () => {
  try {
    const response = await axiosInstance.get('/todos', {
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
    return response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response?.data;
    }
  }
};

export const createTodo = async (data: { todo: string }) => {
  try {
    const response = await axiosInstance.post(`/todos`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
    return response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response?.data;
    }
  }
};

export const updateTodo = async (
  id: number,
  data: { todo: string; isCompleted: boolean },
) => {
  try {
    await axiosInstance.put(`todos/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
    const response = getTodos();
    return await response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response?.data;
    }
  }
};

export const deleteTodo = async (id: number) => {
  try {
    await axiosInstance.delete(`todos/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
    const response = getTodos();
    return await response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response?.data;
    }
  }
};
